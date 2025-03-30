# pathway_service/processors/transaction_processor.py
import pathway as pw
from datetime import datetime
import json

class TransactionProcessor:
    def process_transactions(self, transactions_data, options=None):
        # Create a Pathway table from the transactions
        transactions_table = pw.io.memory.read(
            transactions_data,
            schema=pw.schema_from_dict({"id": str, "amount": float, "category": str, "date": str, "type": str})
        )
        
        # Group by date and calculate daily totals
        daily_totals = (
            transactions_table
            .groupby(lambda t: t.date.split('T')[0])
            .reduce(
                date=pw.reducers.first(lambda t: t.date.split('T')[0]),
                income=pw.reducers.sum(lambda t: t.amount if t.type == 'income' else 0),
                expense=pw.reducers.sum(lambda t: t.amount if t.type == 'expense' else 0)
            )
            .select(
                lambda t: pw.this.update(
                    balance=t.income - t.expense
                )
            )
        )
        
        # Group by category for pie chart data
        category_distribution = (
            transactions_table
            .filter(lambda t: t.type == 'expense')
            .groupby(lambda t: t.category)
            .reduce(
                category=pw.reducers.first(lambda t: t.category),
                total=pw.reducers.sum(lambda t: t.amount)
            )
        )
        
        # Run the Pathway computation
        pw.run()
        
        # Convert results to Python objects
        daily_totals_list = [row for row in daily_totals]
        daily_totals_list.sort(key=lambda x: x["date"])
        
        category_distribution_list = [row for row in category_distribution]
        
        # Return processed data
        return {
            "processedData": {
                "dailyTotals": daily_totals_list,
                "categoryDistribution": category_distribution_list
            },
            "visualizations": {
                "trendChart": self._generate_trend_chart_data(daily_totals_list),
                "categoryDistribution": self._generate_category_distribution_data(category_distribution_list)
            }
        }
    
    def _generate_trend_chart_data(self, daily_totals):
        return {
            "chartType": "line",
            "data": daily_totals,
            "options": {
                "xAxis": {
                    "dataKey": "date",
                    "label": "Date"
                },
                "yAxis": {
                    "label": "Amount"
                },
                "lines": [
                    {"dataKey": "income", "color": "#4CAF50", "name": "Income"},
                    {"dataKey": "expense", "color": "#F44336", "name": "Expense"},
                    {"dataKey": "balance", "color": "#2196F3", "name": "Balance"}
                ]
            }
        }
    
    def _generate_category_distribution_data(self, category_data):
        return {
            "chartType": "pie",
            "data": category_data,
            "options": {
                "dataKey": "total",
                "nameKey": "category",
                "colors": ["#4CAF50", "#2196F3", "#FFC107", "#E91E63", "#9C27B0", "#FF5722"]
            }
        }
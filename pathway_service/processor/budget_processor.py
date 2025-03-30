# pathway_service/processors/budget_processor.py
import pathway as pw
from datetime import datetime

class BudgetProcessor:
    def process_budget(self, budget_data, transactions_data):
        # Create Pathway tables
        budget_table = pw.io.memory.read(
            budget_data["categories"],
            schema=pw.schema_from_dict({"name": str, "amount": float})
        )
        
        transactions_table = pw.io.memory.read(
            transactions_data,
            schema=pw.schema_from_dict({"category": str, "amount": float, "date": str, "type": str})
        )
        
        # Filter transactions by date and type
        filtered_transactions = (
            transactions_table
            .filter(lambda t: (
                t.date >= budget_data["start_date"] and 
                t.date <= budget_data["end_date"] and
                t.type == "expense"
            ))
        )
        
        # Group transactions by category
        category_totals = (
            filtered_transactions
            .groupby(lambda t: t.category)
            .reduce(
                category=pw.reducers.first(lambda t: t.category),
                actual=pw.reducers.sum(lambda t: t.amount)
            )
        )
        
        # Join with budget categories
        budget_comparison = (
            budget_table
            .join(
                category_totals,
                left_on=lambda left: left.name,
                right_on=lambda right: right.category
            )
            .select(
                lambda row: pw.this_or(
                    {
                        "category": row.left.name,
                        "planned": row.left.amount,
                        "actual": row.right.actual if row.right else 0
                    }
                )
            )
            .select(
                lambda t: pw.this.update(
                    variance=t.planned - t.actual,
                    percentUsed=(t.actual / t.planned * 100) if t.planned > 0 else 0
                )
            )
        )
        
        # Run the Pathway computation
        pw.run()
        
        # Convert results to Python objects
        budget_comparison_list = [row for row in budget_comparison]
        
        # Return processed data
        return {
            "processedData": {
                "budgetComparison": budget_comparison_list
            },
            "visualizations": {
                "budgetComparison": self._generate_budget_comparison_chart(budget_comparison_list)
            }
        }
    
    def _generate_budget_comparison_chart(self, comparison_data):
        return {
            "chartType": "bar",
            "data": comparison_data,
            "options": {
                "xAxis": {
                    "dataKey": "category",
                    "label": "Category"
                },
                "yAxis": {
                    "label": "Amount"
                },
                "bars": [
                    {"dataKey": "planned", "color": "#4CAF50", "name": "Planned"},
                    {"dataKey": "actual", "color": "#F44336", "name": "Actual"}
                ]
            }
        }
import pathway as pw

# Create a simple data pipeline
table = pw.debug.table_from_markdown("""
    | name  | age
1   | Alice | 25
2   | Bob   | 30
""")

# Filter data
result = table.filter(pw.this.age > 26)

# Print the result
pw.debug.compute_and_print(result)

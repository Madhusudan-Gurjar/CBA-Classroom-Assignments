import pandas as pd

# -------------------- EXTRACT --------------------
# Read CSV file
df = pd.read_csv("sales_data.csv")

# -------------------- TRANSFORM --------------------

# Remove duplicate records
df = df.drop_duplicates()

# Handle missing values
df = df.fillna({
    "product": "Unknown",
    "category": "Unknown",
    "quantity": 0,
    "price": 0
})

# Create total_amount column
df["total_amount"] = df["quantity"] * df["price"]

# Convert order_date to datetime
df["order_date"] = pd.to_datetime(df["order_date"])

# Filter orders where total_amount > 1000
df = df[df["total_amount"] > 1000]

# Select required columns
df = df[["order_id", "product", "quantity", "price", "total_amount", "order_date"]]

# -------------------- LOAD --------------------
# Store cleaned data into CSV
df.to_csv("clean_sales_data.csv", index=False)

print("Sales ETL Pipeline completed successfully")
print(df)
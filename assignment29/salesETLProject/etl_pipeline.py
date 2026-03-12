import pandas as pd

# -------------------------
# EXTRACT
# -------------------------

# Load sales files
jan_sales = pd.read_csv("salesETLProject/data/sales_january.csv")
feb_sales = pd.read_csv("salesETLProject/data/sales_february.csv")

# Load store details
store_details = pd.read_csv("salesETLProject/data/store_details.csv")

# Combine sales data
sales_data = pd.concat([jan_sales, feb_sales], ignore_index=True)


# -------------------------
# TRANSFORM
# -------------------------

# Remove extra spaces in column names
sales_data.columns = sales_data.columns.str.strip()
store_details.columns = store_details.columns.str.strip()

# Remove duplicate transactions
sales_data = sales_data.drop_duplicates(subset="transaction_id")

# Standardize date format
sales_data["transaction_date"] = pd.to_datetime(
    sales_data["transaction_date"], errors="coerce", dayfirst=True
)

sales_data["transaction_date"] = sales_data["transaction_date"].dt.strftime("%Y-%m-%d")

# Handle missing values
sales_data["quantity"] = sales_data["quantity"].fillna(0)
sales_data["price"] = sales_data["price"].fillna(0)

# Create total_amount column
sales_data["total_amount"] = sales_data["quantity"] * sales_data["price"]

# Merge with store details
final_data = pd.merge(sales_data, store_details, on="store_id", how="left")

# Reorder columns
final_data = final_data[
    [
        "transaction_id",
        "store_id",
        "store_name",
        "city",
        "product",
        "quantity",
        "price",
        "total_amount",
        "transaction_date",
    ]
]


# -------------------------
# LOAD
# -------------------------

# Save cleaned dataset
final_data.to_csv("salesETLProject/output/clean_sales_data.csv", index=False)

print("ETL Pipeline completed successfully!")
print("Clean data saved to output/clean_sales_data.csv")
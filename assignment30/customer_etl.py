import pandas as pd

# -------------------- EXTRACT --------------------

# Read CRM CSV file
crm_df = pd.read_csv("customers.csv")

# Read Website JSON file
web_df = pd.read_json("website_customers.json")

# -------------------- TRANSFORM --------------------

# Merge datasets using customer_id
df = pd.merge(crm_df, web_df, on="customer_id", how="left")

# Standardize city names to uppercase
df["city"] = df["city"].str.upper()

# Remove duplicate customers
df = df.drop_duplicates(subset="customer_id")

# Add registration source column
df["registration_source"] = "CRM + WEBSITE"

# -------------------- LOAD --------------------

# Store final dataset
df.to_csv("integrated_customers.csv", index=False)

print("Customer Integration ETL Completed")
print(df)
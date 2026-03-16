import pandas as pd

# -------------------- EXTRACT --------------------
logs = []

with open("server_logs.txt", "r") as file:
    for line in file:
        parts = line.strip().split()

        timestamp = parts[0] + " " + parts[1]
        event_type = parts[3]
        user_id = parts[4].split("=")[1]

        logs.append([timestamp, event_type, user_id])

df = pd.DataFrame(logs, columns=["timestamp", "event_type", "user_id"])

# -------------------- TRANSFORM --------------------

# Convert timestamp to datetime
df["timestamp"] = pd.to_datetime(df["timestamp"])

# Count total events per user
user_events = df.groupby("user_id").size().reset_index(name="total_events")

# Count events per type
event_counts = df.groupby("event_type").size().reset_index(name="event_count")

# -------------------- LOAD --------------------

user_events.to_csv("user_event_summary.csv", index=False)
event_counts.to_csv("event_type_summary.csv", index=False)

print("Log ETL Pipeline Completed")

print("\nUser Event Summary")
print(user_events)

print("\nEvent Type Summary")
print(event_counts)
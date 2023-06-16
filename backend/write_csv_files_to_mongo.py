import pandas as pd
from pymongo import MongoClient


IP = "mongodb"
MONGO_PORT = 27017
DB_NAME = "turbines_data"
TURBINES_DATA_PATHS = [
    "data/Turbine1.csv",
    "data/Turbine2.csv",
]


client = MongoClient(IP, MONGO_PORT)
db = client[DB_NAME]


def reformat_turbine_csv(df):
    """
    Strips the white spaces from the column names.
    Adds the measurement units to the column names.
    Removes row zero containing said units.
    Resets the index.
    """

    df.columns = df.columns.str.strip()
    df.iloc[0] = df.iloc[0].str.strip()
    df.columns = [name if metric == '' else f"{name} ({metric})"
                  for name, metric in zip(df.columns, df.iloc[0])]
    df.drop(0, inplace=True)
    df.reset_index(drop=True, inplace=True)

for turbine_path in TURBINES_DATA_PATHS:
    df = pd.read_csv(turbine_path, delimiter=";")
    reformat_turbine_csv(df)
    turbine_idx = int(turbine_path.split("Turbine")[1].split(".")[0])
    collection = f"turbine{turbine_idx}"
    data_dict = df.to_dict("records")
    db[collection].delete_many({})
    db[collection].insert_many(data_dict)


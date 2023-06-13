import pandas as pd
from pymongo import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
import os


load_dotenv()

PASSWORD = os.getenv("first_password")
USER = os.getenv("first_user")
DB_NAME = "turbines_data"
TURBINES_DATA_PATHS = [
    "data/Turbine1.csv",
    "data/Turbine2.csv",
]

uri = f"mongodb+srv://{USER}:{PASSWORD}@turbit-experiments.rmrjgdf.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri, server_api=ServerApi('1'))
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

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
    data_dict = df.to_dict("records")
    # deleting all documents in the collection before inserting new ones
    db[f"turbine{turbine_idx}"].delete_many({})
    db[f"turbine{turbine_idx}"].insert_many(data_dict)

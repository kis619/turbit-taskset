import pandas as pd
from pymongo import MongoClient

# DB constants
IP = "mongodb"
MONGO_PORT = 27019
DB_NAME = "turbines_data"

# Collection constants
DATE_TIME = "Dat/Zeit"

# Connect to MongoDB
client = MongoClient(IP, MONGO_PORT)
db = client[DB_NAME]
collections = db.list_collection_names()


def get_data_for_all_datetimes(collection: list, columns: list):
    """
    Returns a dictionary with the date and time as key
    and the values of the columns as values.

    Parameters:
        collection (list): List of documents from a MongoDB collection
        columns (list): List of columns to be extracted from the documents

    Returns:
        data (dict): Dictionary with the date and time as key
    """

    data = {}
    for doc in collection:
        data[doc[DATE_TIME]] = [doc[column] for column in columns]
    return data


if __name__ == "__main__":
    date_power_wind = get_data_for_all_datetimes(
        list(db["turbine1"].find()),
        ["Leistung (kW)", "Wind (m/s)"]
    )

    df = pd.DataFrame(date_power_wind.values(),
                      index=date_power_wind.keys(),
                      columns=['Wind_Speed', 'Power_Output'])

    print(df.head())

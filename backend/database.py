from pymongo import MongoClient

# DB constants
IP = "mongodb"
MONGO_PORT = 27017
DB_NAME = "turbines_data"


client = MongoClient(IP, MONGO_PORT)

db = client[DB_NAME]

def fetch_one_from_collection_by_date(collection_name: str,
                                      columns: dict,
                                      date: str):
    """
    Fetches one document from a collection by date.
    Parameters:
        collection_name: str - name of the collection
        columns: dict - columns to be returned
        date: str - date of the document to be returned
    Returns:
        dict - selected columns from document
    """
    return db[collection_name].find_one({"Dat/Zeit": date}, projection=columns)

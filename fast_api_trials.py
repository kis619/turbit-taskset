from fastapi import FastAPI
from pymongo import MongoClient

app = FastAPI()

client = MongoClient("localhost", 27019)
db = client["turbines_data"]
collection = db["turbine1"]

@app.get("/")
async def root():
    return {"message": "Hello World"}

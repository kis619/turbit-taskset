from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import fetch_one_from_collection_by_date

app = FastAPI()

origins = [
    "http://localhost:3000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

desired_columns = {"Wind (m/s)": True, "Leistung (kW)": True, "_id": False}


@app.get("/")
async def root():
    return 42


@app.get("/turbine_wind_and_power")
async def turbine1(turbine: str, date: str):
    print(date)
    return fetch_one_from_collection_by_date(turbine, desired_columns, date)
    return 41

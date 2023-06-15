#!/bin/bash
python3 write_csv_files_to_mongo.py
uvicorn main:app --reload --host 0.0.0.0 --port 8001
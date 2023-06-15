#!/bin/bash

# Build containers
docker compose build --no-cache
# Run docker-compose
docker compose up -d

# Wait until the "mg" container is up and running
while ! docker ps --filter name=mg --format '{{.Status}}' | grep -q "Up"; do
    echo -e "\e[33m start.sh: Waiting for MongoDB to be up and running\e[0m"
  sleep 1
done

# load data into mongo
python3 write_csv_files_to_mongo.py
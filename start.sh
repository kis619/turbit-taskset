#!/bin/bash

# Define your directory name
DIR="docker_data"

# Check if the directory exists
if [ ! -d "$DIR" ]; then
  # If the directory doesn't exist, create it
  mkdir "$DIR"
fi

# Run docker-compose
docker compose up -d

# Wait until the "mg" container is up and running
while ! docker ps --filter name=mg --format '{{.Status}}' | grep -q "Up"; do
  sleep 1
done

python3 write_csv_files_to_mongo.py
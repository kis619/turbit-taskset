FROM python:latest

WORKDIR /app

COPY requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

EXPOSE 8001

# ENTRYPOINT ["start.sh"]
# CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8001"]
ENTRYPOINT ["/bin/bash", "./start.sh"]
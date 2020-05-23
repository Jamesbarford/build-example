FROM python:3.7.7-alpine

WORKDIR /c-app/

COPY ./c-app ./src/

RUN python -m pip install -r ./src/requirements.txt

CMD ["python", "./src/app.py"]

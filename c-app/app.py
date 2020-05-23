from flask import Flask
from src.main import example_function

app = Flask(__name__)


@app.route('/')
def hello_world():
    example_function()
    return "Hello, World!"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

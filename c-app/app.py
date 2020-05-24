from flask import Flask, jsonify
from src.main import example_function

app = Flask(__name__)


@app.route('/api')
def hello_world():
    example_function()
    return {
        "body": "Message from flask"
    }


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

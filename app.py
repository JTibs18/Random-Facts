from flask import Flask, request, render_template, jsonify 
from dotenv import load_dotenv
from getRandomFact import getRandomFact

load_dotenv('./.flaskenv')

app = Flask(__name__)

@app.route('/')
def index():
    factType = request.args.get("factType")
    min = request.args.get("min")
    max = request.args.get("max")

    randomFact = getRandomFact(factType, min, max) 
    
    if request.headers.get('X-Requested-With') == "XMLHttpRequest":
        return jsonify(randomFact)

    return render_template('index.html')

if __name__ == '__main__':
    app.run()
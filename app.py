from flask import Flask, request, render_template, jsonify 
from dotenv import load_dotenv
from getRandomFact import getRandomFact

load_dotenv('./.flaskenv')

app = Flask(__name__)

@app.route('/')
def index():
    randomFact = getRandomFact("math", 1, 1) # temp variables. need to get input from UI
    
    if request.headers.get('X-Requested-With') == "XMLHttpRequest":
        return jsonify(randomFact)

    return render_template('index.html')

if __name__ == '__main__':
    app.run()
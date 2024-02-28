import requests
from constants import API_KEY

def getRandomFact(type, min, max):
    validTypes = ["trivia", "math", "date", "year"]

    if type not in validTypes:
        return "Error: invalid type"

    url = f"https://numbersapi.p.rapidapi.com/random/{type}"

    querystring = {"min":min,"max":max,"fragment":"true","json":"true"}

    headers = {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "numbersapi.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers, params=querystring)

    return response.json()

print(getRandomFact("year", 50, 100))
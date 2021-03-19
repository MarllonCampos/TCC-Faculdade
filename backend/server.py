from flask import Flask, request
from backend.functions import login, register, retrieve 
import cv2
app = Flask('Greenery')

@app.route('/login', methods=['POST'])
def tologin():
    user = request.get_json()
    response =  login(user)
    return response

@app.route('/register', methods=['POST'])
def toregister():
    user = request.get_json()
    response =  register(user)
    return response

@app.route('/retrieve', methods=['POST'])
def toretrieve():
    user = request.get_json()
    response = retrieve(user)
    return response

@app.route('/', methods=['GET'])
def put():

    return ('hello World!')

@app.route('/', methods=['PATCH'])
def patch():

    return ('PATCH')

@app.route('/', methods=['DELETE'])
def delete():

    return ('DELETE')

app.run()




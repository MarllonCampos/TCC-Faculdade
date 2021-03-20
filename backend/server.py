from flask import Flask, request
from backend.functions import login, register, retrieve 
from flask_cors import CORS, cross_origin
import cv2
import os
app = Flask('Greenery')
port = int(os.environ.get('PORT', 33507))
cors = CORS(app, resources={r"/": {"origins": "*"}})

@app.route('/login', methods=['POST'])
@cross_origin(origin='*',headers=['Content- Type'])
def tologin():
    print('server.py-13')
    user = request.get_json()
    print('server.py-15')
    response =  login(user)
    return response

@app.route('/register', methods=['POST'])
@cross_origin(origin='*',headers=['Content- Type'])
def toregister():
    user = request.get_json()
    response =  register(user)
    return response

@app.route('/retrieve', methods=['POST'])
@cross_origin(origin='*',headers=['Content- Type'])
def toretrieve():
    user = request.get_json()
    response = retrieve(user)
    return response

@app.route('/', methods=['POST'])
@cross_origin(origin='*',headers=['Content- Type'])
def put():
    user = request.get_json()
    return (user)

@app.route('/', methods=['PATCH'])
def patch():

    return ('PATCH')

@app.route('/', methods=['DELETE'])
def delete():

    return ('DELETE')

app.run(port=port, host='0.0.0.0')




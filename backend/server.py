from flask import Flask, request

app = Flask('Greenery')

@app.route('/login', methods=['POST'])
def post():
    user = request.get_json()

    return user

@app.route('/', methods=['GET'])
def get():

    return ('GET')


@app.route('/', methods=['PUT'])
def put():

    return ('PUT')

@app.route('/', methods=['PATCH'])
def patch():

    return ('PATCH')

@app.route('/', methods=['DELETE'])
def delete():

    return ('DELETE')

app.run(port='4000')




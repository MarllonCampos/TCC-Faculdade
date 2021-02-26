from flask import Flask

app = Flask('Greenery')
app.config['DEBUG'] = True

@app.route('/', methods=['GET'])
def get():

    return ('GET')

@app.route('/', methods=['POST'])
def post():

    return ('POST')

@app.route('/', methods=['PUT'])
def put():

    return ('PUT')

@app.route('/', methods=['PATCH'])
def patch():

    return ('PATCH')

@app.route('/', methods=['DELETE'])
def delete():

    return ('DELETE')

app.run()
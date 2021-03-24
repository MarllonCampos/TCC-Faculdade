import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()

# definindo dados refentes ao banco de dados
config = {
    'host' : os.environ.get("HOST"),
    'port' : os.environ.get("DBPORT"),
    'database' : os.environ.get("DATABASE"),
    'user': os.environ.get("DBUSER"),
    'password': os.environ.get("PASSWORD"),
    'ssl_disabled': True
}

def openConnection():
    print('conn-17')
    try:
        conn = mysql.connector.connect(**config)
        print("Acesso ao banco de dados: Conexão Estabelecida - INSERT")
    except mysql.connector.Error as err:
        print('conn-21')
        return({'status':'erro', 'message': str(err)})

    else:
        print('conn-21')
        return conn
        # cursor = conn.cursor()
    
    
    
        
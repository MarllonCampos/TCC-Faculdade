import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()

# definindo dados refentes ao banco de dados
config = {
    'host' : os.environ.get("HOST"),
    'port' : os.environ.get("PORT"),
    'database' : os.environ.get("DATABASE"),
    'user': os.environ.get("DBUSER"),
    'password': os.environ.get("PASSWORD")
}
print(config)

def openConnection():

    try:
        conn = mysql.connector.connect(**config)
        print("Acesso ao banco de dados: Conexão Estabelecida - INSERT")

    except mysql.connector.Error as err:
        return({'status':'erro', 'message': str(err)})

    else:
        return conn
        # cursor = conn.cursor()
    
    
    
        
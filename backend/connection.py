import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()

# definindo dados refentes ao banco de dados
config = {
    'host' : os.getenv("HOST"),
    'port' : os.getenv("PORT"),
    'database' : os.getenv("DATABASE"),
    'user': os.getenv("USER"),
    'password': os.getenv("PASSWORD")
}

try:
    conn = mysql.connector.connect(**config)
    print("Acesso ao banco de dados: Conexão Estabelecida - INSERT")

except mysql.connector.Error as err:
    print(err)

else:
    cursor = conn.cursor()
    
    try:
        # CREATE TABLE 
        # cursor.execute("CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);")
        # print("Tabela criada com sucesso!")

        # INSERT
        # cursor.execute(f"INSERT INTO teste (hello) VALUES ('{st}');")
        # print("dados inseridos com sucesso!")
        
        
        # SELECT
        # cursor.execute("SELECT * FROM teste;")
        # rows = cursor.fetchall()

        print('a')
    
    except Exception as e:
        print(f"Houve um erro: {e}")
    
    finally:
        conn.commit()
        cursor.close()
        conn.close()
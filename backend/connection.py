import psycopg2

# definindo dados refentes ao banco de dados
data = {
    'host': '201.74.113.36',
    'port':'10864',
    'dbname': 'tcc',
    'user': 'tcc',
    'password':'tcc',
}

# construindo string de conexao
conn_string = f"host={data['host']} user={ data['user']} dbname={data['dbname']} password={data['password']} port={data['port']}"

try:
    conn = psycopg2.connect(conn_string)
    print("Conexão estabelecida")    

except psycopg2.connection.ConnectionError as err:
    print(err)

else:
    cursor = conn.cursor()
    
    try:

        # INSERT
        # cursor.execute(f"INSERT INTO teste (hello) VALUES ('{st}');")
        # print("dados inseridos com sucesso!")
        
        
        # SELECT
        cursor.execute("SELECT * FROM teste;")
        rows = cursor.fetchall()

        print(rows)
    
    except Exception as e:
        print(f"Houve um erro: {e}")
    
    finally:
        conn.commit()
        cursor.close()
        conn.close()
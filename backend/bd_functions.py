from utils import validateLogin
from connection import openConnection
import hashlib

# Função que valida usuário
def login(user):
    data = validateLogin(user)
    
    if data['status'] == 'erro':
        return data
    
    else:
        email = data['user']['email']
        password = data['user']['password']

        conn = openConnection()
       
        if type(conn) == dict:
            return conn

        else:
            try:
                cursor = conn.cursor()

                cursor.callproc('loginTeste', [email,])
                
                for result in cursor.stored_results():
                    row = result.fetchall()

                cursor.close()
                
                if len(row) == 0:
                    raise Exception('Email ou senha incorreto(s)!')
                
                else:
                    idUser = row[0][0]
                    nomeUser = row[0][1]
                    passwordBD = row[0][3]
                    # criptografando senha usando o formato md5
                    passwordEncode = hashlib.md5(password.encode())

                    if passwordEncode.hexdigest() == passwordBD:
                        response = getUser(idUser, nomeUser)
                        return response

                    else:
                        raise Exception('Email ou senha incorreto(s)!')

            except Exception as err:
                return({'message':{'title':'Erro',
                'content': str(err)},
                'status':'erro'})
            
            finally:
                conn.commit()
                conn.close()

#Função que traz informações relacionadas ao usuário depois de validado o login 
def getUser(idUser,nomeUser):
    conn = openConnection()

    if type(conn) == dict:
            return conn
    else:
        try:
            cursor = conn.cursor()

            cursor.callproc('getGreenerys',[idUser])
            data=[]
            
            for result in cursor.stored_results():
                row = result.fetchall()
                for greenery in row:
                    idestufa = greenery[0]
                    greenery={"idestufa": greenery[0],
                            "nomeestufa": greenery[1],
                            "ativo": greenery[2],
                            "dataestufa": greenery[3],
                            "fotoestufa": greenery[4],
                    }
                    cursor.callproc('getElements',[idestufa])
                    elements = []
                    for element in cursor.stored_results():
                        row = element.fetchall()
                        for e in row:
                            elem={"nomeelem": e[0],
                            "ativo":e[1]
                            }
                            elements.append(elem)
                    greenery['elementos'] = elements
                    data.append(greenery)
            
            cursor.close()
            return({
                    "status":"ok",
                    "user": nomeUser,
                    "greenerys": data
                    })
        
        except Exception as err:
                return({'message':{'title':'Erro',
                'content': str(err)},
                'status':'erro'})
        finally:
                conn.commit()
                conn.close()



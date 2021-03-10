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

                # searchLogin = f"call loginTeste('{email}')"
                cursor.callproc('loginTeste', [email,])

                result = cursor.stored_results()
                
                for result in cursor.stored_results():
                    row = result.fetchall()

                cursor.close()
                
                if len(row) == 0:
                    return({'status':'erro', 'message': 'Email ou senha incorreto(s)!'})
                
                else:
                    passwordBD = row[0][3]
                    passwordEncode = hashlib.md5(password.encode())
                    print(passwordEncode)
                    print(passwordBD)

                    if passwordEncode.hexdigest() == passwordBD:
                        return({
                            "status":"ok",
                            "message":"validado",
                            "user":{
                                "email": email,
                                "password": password
                                }
                            })

                    else:
                        return({'status':'erro', 'message': 'Email ou senha incorreto(s)!'})
            
            except Exception as err:
                return({'status':'erro', 'message': str(err)})
            finally:
                conn.commit()
                conn.close()



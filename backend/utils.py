from validate_email import validate_email

def validateLogin(user):
    try:
        if 'email' in user and 'password' in user:
            
            email = user['email']
            password = user['password']

            if (email is None or email == ''):
                raise Exception('Email não informado!')
            
            elif not(validate_email(email_address = email, check_regex = True, check_mx = False)):
                raise Exception('E-mail não valido!')
        
            elif (password is None or password == '') :
                raise Exception('Senha não informado!')
            
            else:
                return({
                    "status":"ok",
                    "message":"validado",
                    "user":{
                        "email": email,
                        "password": password
                        }
                    })
        else:
            raise Exception('E-mail ou senha inexistente!')

    except Exception as error:
        
        return({'message':{'title':'Erro',
                'content': str(error)},
                'status':'erro'})
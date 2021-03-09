from validate_email import validate_email

def validateLogin(user):
    try:
        email = user['email']
        password = user['password']

        if (email is None or email == ''):
           
            print ('Email não informado! ')
            
            raise Exception('Email não informado!')
        
        elif (validate_email(email_address = email, check_regex = True, check_mx = False)):
            
            print ('E-mail não valido!')
            
            raise Exception('E-mail não valido!')
        
        elif (password is None or password == '') :
            
            print ('Senha não informado!')
            
            raise Exception('Senha não informado!')
     
        else:
            return({
                "status":"sucesso",
                "message":"validado",
                "user":{
                    "email": email,
                    "password": password
                    }
                })

    except Exception as e:
        return({"status":"erro","message":e})
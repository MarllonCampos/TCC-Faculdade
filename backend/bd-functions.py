from email.utils import parseaddr
def login(user):
    response = validateLogin(user)

#   if (response.status == "erro") {
#     const status = response.status;
#     const message = response.message;
#     return res.status(200).send({ status, message });
#   }
#   const {
#     status,
#     message,
#     user: { telefone, senha },
#   } = response;
#   mysql.getConnection((error, conn) => {
#     if (error) {
#       return res.status(200).send({ erro: error });
#     }
#     conn.query(
#       `select id,senha,nome from usuarios where telefone='${telefone}'`,
#       (error, result) => {
#         console.log(result);
#         if (error) {
#           return res.status(200).send({ erro: error });
#         }
#         if (result == "") {
#           return res.status(200).send({ erro: "Usuário inexistente" });
#         }
#         if (result[0].senha != senha) {
#           return res.status(200).send({ erro: "Senha incorreta" });
#         }
#         const id = result[0].id;
#         const nome = result[0].nome;
#         return res.status(200).send({ id, nome });
#       }
#     );
#     conn.release();
#   });
# });

def validateLogin(user):
    try:
        email = user['email']
        password = user['password']

        if (email is None or email == ''):
            print ('Email não informado! ')
            raise Exception('Email não informado!')
        elif (validate_email(email_address = email, check_regex = True, check_mx = False)):
            print ('E-mail não valido! ')
            raise Exception('E-mail não valido!')
        elif (password is None or password == '') :
            print ('Senha não informado! ')
            raise Exception('Senha não informado!')
        else:
            return({
                "status":"sucesso",
                "message":"validado",
                "user":{
                    "email": email,
                    "password": password
                    }
                }
            )
    except Exception as e:
         return({"status":"erro","message":e})
from validate_email import validate_email
is_valid = validate_email(email_address='supremeduck@gmail.com', check_regex=True, check_mx=False)

print (is_valid)

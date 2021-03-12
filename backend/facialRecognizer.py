import cv2
import imutils
import face_recognition

def faceDetect(img):
    try:
        loadAlgoritmo = cv2.CascadeClassifier('Haar/haarcascade_frontalface_default.xml')

        imagem = imutils.url_to_image(img)
        # imagem=cv2.imread(img)
        imagemcinza=cv2.cvtColor(imagem, cv2.COLOR_BGR2GRAY)

        faces = loadAlgoritmo.detectMultiScale(imagemcinza,
            scaleFactor=1.3,
            minNeighbors=5,
            minSize=(30, 30))
 
        return (len(faces))

    except Exception as error:
         return({'message':{'title':'Erro',
                'content': str(error)},
                'status':'erro'})

def faceRecognition(imgUser, imgBD):

    try:
        hasFace = faceDetect(imgUser)

        if type(hasFace) == dict:
            return hasFace
        elif hasFace != 1:
            print('a')
            raise Exception('Foto invalida! Tente novamente ou selecione outra foto.')
        else:
            # imageUser= face_recognition.load_image_file(imgUser)
            imageUser= imutils.url_to_image(imgUser)
            imageUser_encoding = face_recognition.face_encodings(imageUser)[0]

            # imageBD = face_recognition.load_image_file(imgBD)
            imageBD= imutils.url_to_image(imgBD)
            imageBD_encoding = face_recognition.face_encodings(imageBD)[0]
                
            # Compara as faces
            results = face_recognition.compare_faces([imageUser_encoding], imageBD_encoding, 0.5)
            
            if not results[0]:
                raise Exception ('Usuário não reconhecido! Tente novamente ou cadastre-se.')
            else:
                return True
    
    except Exception as error:
        return({'message':{'title':'Erro',
                'content': str(error)},
                'status':'erro'}) 
                
# print(faceDetect('https://segredosdomundo.r7.com/wp-content/uploads/2020/03/13-atitudes-que-difere-as-pessoas-felizes-das-outras.jpg'))
print(faceRecognition('https://secure.i.telegraph.co.uk/multimedia/archive/01434/jacksondone_1434760c.jpg','https://www.legacy.com/wp-content/uploads/2020/08/hero-michael-jackson-getty-1200x900.jpg'))

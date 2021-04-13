import firebase from 'firebase/app'
import "firebase/storage"
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
}




firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();


const uploadImage = (image,setUrl) => {
    const upload = storage.ref(`retrievePhotos/${image.name}`).put(image);

    upload.on(
        "state_changed",
        snapshot => { },
        error => error,
        () => {
            return storage.ref('retrievePhotos')
                .child(image.name)
                .getDownloadURL()
                .then(url =>  { setUrl(url)})
            
        }
    )
}

export {uploadImage};
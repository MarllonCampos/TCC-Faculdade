import firebase from 'firebase/app'
import "firebase/storage"
const firebaseConfig = {
      apiKey: "AIzaSyCwBy5PoRhuvQxuKbO8rF8VciRnxLRen_I",
    authDomain: "tcc-faculdade-bfbb8.firebaseapp.com",
    projectId: "tcc-faculdade-bfbb8",
    storageBucket: "tcc-faculdade-bfbb8.appspot.com",
    messagingSenderId: "279833007170",
    appId: "1:279833007170:web:67a6e9ecea16a91c30c9db"
  
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


export { storage, firebase as default };
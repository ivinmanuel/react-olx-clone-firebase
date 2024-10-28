import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgQrX4WQ2iEKxt3cOT-PwsEqTuPwqZMB0",
  authDomain: "olx-clone-f45f3.firebaseapp.com",
  projectId: "olx-clone-f45f3",
  storageBucket: "olx-clone-f45f3.appspot.com",
  messagingSenderId: "252756497754",
  appId: "1:252756497754:web:cfe30bf9179e605e5d4f63",
  measurementId: "G-QH3QT65RKP"
};

 export default firebase.initializeApp(firebaseConfig)
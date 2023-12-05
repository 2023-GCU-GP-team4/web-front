import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA-u_Dna6iYXED5zLm__XjL6tOBxv9PTTM",
    authDomain: "gcuteam4.firebaseapp.com",
    databaseURL: "https://gcuteam4-default-rtdb.firebaseio.com",
    projectId: "gcuteam4",
    storageBucket: "gcuteam4.appspot.com",
    messagingSenderId: "241911485477",
    appId: "1:241911485477:web:2e816bf7e24cc94f205bcc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };

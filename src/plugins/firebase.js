//import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDb8Cue7PCPcACj9eba6p82EDDLHwXDNLk",
    authDomain: "projetointegrador-livros.firebaseapp.com",
    projectId: "projetointegrador-livros",
    storageBucket: "projetointegrador-livros.appspot.com",
    messagingSenderId: "835183183640",
    appId: "1:835183183640:web:af8d03042ed978c7e8c06d"
};

const app = initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth()

const profileCollection = collection(db, 'profile')
const booksCollection = collection(db, 'books')

export {
    db, auth, profileCollection, booksCollection
}
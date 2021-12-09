import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDb8Cue7PCPcACj9eba6p82EDDLHwXDNLk",
    authDomain: "projetointegrador-livros.firebaseapp.com",
    projectId: "projetointegrador-livros",
    storageBucket: "projetointegrador-livros.appspot.com",
    messagingSenderId: "835183183640",
    appId: "1:835183183640:web:af8d03042ed978c7e8c06d"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}
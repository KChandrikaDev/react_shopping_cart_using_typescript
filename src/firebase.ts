// import firebase from 'firebase/compat/app';
// import firestore from 'firebase/compat/firestore'
// import { getFirestore } from "@firebase/firestore";
// const config = {
//     apiKey: "AIzaSyDJe_cthzoLxiFboac3dubZtG4e0SGrIX4",
//     authDomain: "react-crud-typescript-45637.firebaseapp.com",
//     projectId: "react-crud-typescript-45637",
//     storageBucket: "react-crud-typescript-45637.appspot.com",
//     messagingSenderId: "182065472264",
//     appId: "1:182065472264:web:3a0881f2d1dbb769f4c2bd"
//   };

// firebase.initializeApp(config);
// export const db = getFirestore();

// export default firebase.firestore();

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firestore from 'firebase/compat/firestore'
import { getFirestore } from "@firebase/firestore";
import 'firebase/storage'
const settings = {timestampsInSnapshots: true};


const config = {
    apiKey: "AIzaSyDJe_cthzoLxiFboac3dubZtG4e0SGrIX4",
    authDomain: "react-crud-typescript-45637.firebaseapp.com",
    projectId: "react-crud-typescript-45637",
    storageBucket: "react-crud-typescript-45637.appspot.com",
    messagingSenderId: "182065472264",
    appId: "1:182065472264:web:3a0881f2d1dbb769f4c2bd"
  };

export const app= firebase.initializeApp(config);
// firebase.firestore().settings(settings);

export const db = getFirestore();

// export const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

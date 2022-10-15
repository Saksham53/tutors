import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseconfig ={
    apiKey: "AIzaSyC4onwXo3DRpF8Qj6bEBezQFIIrN-bocrY",

  authDomain: "tutors-d8164.firebaseapp.com",

  projectId: "tutors-d8164",

  storageBucket: "tutors-d8164.appspot.com",

  messagingSenderId: "10567806162",

  appId: "1:10567806162:web:2b1e2fba2828494d22510b",

  measurementId: "G-7W3ETLXPMY"

}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseconfig);
}

export {firebase};
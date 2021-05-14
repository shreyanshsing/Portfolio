import firebase from 'firebase/app'
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD40e9WzWUsPRLaxxjObdSbfbO7osApIps",
    authDomain: "portfolio-90879.firebaseapp.com",
    projectId: "portfolio-90879",
    storageBucket: "portfolio-90879.appspot.com",
    messagingSenderId: "547907590332",
    appId: "1:547907590332:web:6b40ffe14198d7ae3158b9",
    measurementId: "G-VH4FL9EM0F"
  };

 // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  const firestore = firebase.firestore();

export  {
   firestore, firebase as default
 }
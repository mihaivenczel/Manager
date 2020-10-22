import firebase from 'firebase';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const config = {
    apiKey: "AIzaSyB2RBfniW8yMzBKrpvHrXgTQvO7ArxnBLM",
    authDomain: "manage-239ab.firebaseapp.com",
    databaseURL: "https://manage-239ab.firebaseio.com",
    projectId: "manage-239ab",
    storageBucket: "manage-239ab.appspot.com",
    messagingSenderId: "108745414771",
    appId: "1:108745414771:web:f9287dd66f2e970eecb206",
    measurementId: "G-HBWXFETZH4"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;
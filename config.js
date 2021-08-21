import firebase from 'firebase'
require("@firebase/firestore")

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3xulgQgsYrcp6DZhtP6JJuD595PPEr60",
  authDomain: "p-71-b33b7.firebaseapp.com",
  projectId: "p-71-b33b7",
  storageBucket: "p-71-b33b7.appspot.com",
  messagingSenderId: "337110804099",
  appId: "1:337110804099:web:803ecd877e4be9a7525db6",
  measurementId: "G-TDPWCNSVKJ"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()


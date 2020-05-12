import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABJiMsCYirThzbcHzRTT64DNcY0-bYTIY",
  authDomain: "growth-investment-2debb.firebaseapp.com",
  databaseURL: "https://growth-investment-2debb.firebaseio.com",
  projectId: "growth-investment-2debb",
  storageBucket: "growth-investment-2debb.appspot.com",
  messagingSenderId: "646580873570",
  appId: "1:646580873570:web:6dc697a36f5ca174e1a43b",
  measurementId: "G-NFXSF5B8Z5"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();
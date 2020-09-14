import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBO7Lebuk6qM1JxcjWf8KaGmxgD_V8qaMI",
  authDomain: "clone-ad10b.firebaseapp.com",
  databaseURL: "https://clone-ad10b.firebaseio.com",
  projectId: "clone-ad10b",
  storageBucket: "clone-ad10b.appspot.com",
  messagingSenderId: "976908843146",
  appId: "1:976908843146:web:151554619191d81b969573"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

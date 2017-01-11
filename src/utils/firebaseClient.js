import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAYGEL7PNQHFLObNrpc8dpKpvCHXY59zSE",
  authDomain: "anesthesiaapp-337a3.firebaseapp.com",
  databaseURL: "https://anesthesiaapp-337a3.firebaseio.com",
  storageBucket: "anesthesiaapp-337a3.appspot.com",
  messagingSenderId: "634025903164"
}

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const reference = firebase.database().ref('readings');
export const patientReference = firebase.database().ref('patients');

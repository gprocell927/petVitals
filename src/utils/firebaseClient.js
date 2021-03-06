import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBBqRVm9Vq6-kh0nhsCyIkKIi8VVsNvOU4",
  authDomain: "petvitals.firebaseapp.com",
  databaseURL: "https://petvitals.firebaseio.com",
  storageBucket: "petvitals.appspot.com",
  messagingSenderId: "187954041182"
}

firebase.initializeApp(config)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export const signIn = () => auth.signInWithPopup(provider)
                              .then((result) => {
                                var token = result.credential.accessToken
                                var user = result.user
                              })
                              .catch((error) => {
                                  var errorCode = error.code
                                  var errorMessage = error.message
                                  var email = error.email
                                  var credential = error.credential
                              })

export const signOut = () => firebase.auth().signOut()

export const reference = firebase.database().ref('readings')
export const patientReference = firebase.database().ref('patients')

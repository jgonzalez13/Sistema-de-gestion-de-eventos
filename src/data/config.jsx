import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCuveSjhKPPMg29RjVGf80PZyo0eWgzHwY',
  authDomain: 'oops-e3431.firebaseapp.com',
  databaseURL: 'https://oops-e3431.firebaseio.com',
  projectId: 'oops-e3431',
  storageBucket: 'oops-e3431.appspot.com',
  messagingSenderId: '747726766890'
  }
export const firebaseApp = firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

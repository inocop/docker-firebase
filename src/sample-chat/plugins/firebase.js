import firebase from 'firebase'

if (!firebase.apps.length) 
{
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBsKQdWipqLzCsExAu1q7ElWbOiUJmP1GU",
    authDomain: "test-5c9ce.firebaseapp.com",
    databaseURL: "https://test-5c9ce.firebaseio.com",
    projectId: "test-5c9ce",
    storageBucket: "test-5c9ce.appspot.com",
    messagingSenderId: "943119799756"
  };
  firebase.initializeApp(config);
}

export default firebase

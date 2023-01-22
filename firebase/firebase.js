
 import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyBDzMVjpXsbzc53HLpksCaqN9AJLM-kghM",
  authDomain: "brandcity-a85c2.firebaseapp.com",
  projectId: "brandcity-a85c2",
  storageBucket: "brandcity-a85c2.appspot.com",
  messagingSenderId: "795406643142",
  appId: "1:795406643142:web:5683a69984e58c47948cc7"
};
  // Initialize Firebase
  if (firebase.apps.length === 0) {

    firebase.initializeApp(firebaseConfig)

  }
//   firebase.initializeApp(firebaseConfig);
  export default firebase;
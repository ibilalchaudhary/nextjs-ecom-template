// import firebase from 'firebase';
// import 'firebase/messaging';
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js')

firebase.initializeApp({
  apiKey: "AIzaSyBDzMVjpXsbzc53HLpksCaqN9AJLM-kghM",
  authDomain: "brandcity-a85c2.firebaseapp.com",
  projectId: "brandcity-a85c2",
  storageBucket: "brandcity-a85c2.appspot.com",
  messagingSenderId: "795406643142",
  appId: "1:795406643142:web:5683a69984e58c47948cc7"
});
// Initialize Firebase
const messaging = firebase.messaging();
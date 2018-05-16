import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBxIsg9ZG_Hlr1fK59UCiWpdlo1qzpbgGo",
  authDomain: "macreact-a858a.firebaseapp.com",
  databaseURL: "https://macreact-a858a.firebaseio.com",
  projectId: "macreact-a858a",
  storageBucket: "",
  messagingSenderId: "919720439810"
}

const fire = firebase.initializeApp(config);

export default fire;
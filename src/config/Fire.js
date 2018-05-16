import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCWHGK5EXqHpuVD9oL7l-2T_0oL2BskMzE",
  authDomain: "bitch-e388d.firebaseapp.com",
  databaseURL: "https://bitch-e388d.firebaseio.com",
  projectId: "bitch-e388d",
  storageBucket: "",
  messagingSenderId: "393698259877"
}

const fire = firebase.initializeApp(config);

export default fire;
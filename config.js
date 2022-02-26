import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBOeuEH46ORwA8j9jkkHfvatJDvzTumHCM",
  authDomain: "buzzer-app-6ce93.firebaseapp.com",
  databaseURL: "https://buzzer-app-6ce93-default-rtdb.firebaseio.com",
  projectId: "buzzer-app-6ce93",
  storageBucket: "buzzer-app-6ce93.appspot.com",
  messagingSenderId: "437285306335",
  appId: "1:437285306335:web:00a7d7827b2a9fffcc8e6a"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
 

  
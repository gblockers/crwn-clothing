import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDkDT7KuHrII36pVD1lzX27P0bSLdKjXDs",
    authDomain: "crwn-db-gb.firebaseapp.com",
    projectId: "crwn-db-gb",
    storageBucket: "crwn-db-gb.appspot.com",
    messagingSenderId: "586631501276",
    appId: "1:586631501276:web:4ee7842f20d0a65530eb19"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
import firebase from './firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAM7y7WboWRnMz4HFZMUfX0ndeCD3BaCOk",
    authDomain: "netflix-build-8d899.firebaseapp.com",
    projectId: "netflix-build-8d899",
    storageBucket: "netflix-build-8d899.appspot.com",
    messagingSenderId: "826816842435",
    appId: "1:826816842435:web:d9ad8545aa90c88f56f076",
    measurementId: "G-022TFLTQGK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;
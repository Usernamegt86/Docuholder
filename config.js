import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyC0Ull5SDrnnZI_0znMPQhRqW_hckRtH5M',
  authDomain: 'docuholder-12d97.firebaseapp.com',
  projectId: 'docuholder-12d97',
  storageBucket: 'docuholder-12d97.appspot.com',
  messagingSenderId: '327720147752',
  appId: '1:327720147752:web:a50b8162800b2c9a16ce1d',
};

firebase.initializeApp(firebaseConfig)
export default firebase.firestore();
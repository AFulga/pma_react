import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD2Q4pE7ylJ2eTCZIY5Z6qE1KKiavaVYio',
  authDomain: 'react-spa-ddd07.firebaseapp.com',
  databaseURL: 'https://react-spa-ddd07.firebaseio.com',
  projectId: 'react-spa-ddd07',
  storageBucket: '',
  messagingSenderId: '298878648660',
  appId: '1:298878648660:web:4acd1e765bd71e2af208c1'
};

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;

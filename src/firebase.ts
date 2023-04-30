// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAACA9iuhaf5fCYLq3YhDDGXrn-AM7WTik',
  authDomain: 'discord-clone-udemy-c3bc2.firebaseapp.com',
  projectId: 'discord-clone-udemy-c3bc2',
  storageBucket: 'discord-clone-udemy-c3bc2.appspot.com',
  messagingSenderId: '651491131865',
  appId: '1:651491131865:web:a42802b1072566a5cf59c8',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };

import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import asyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCWipgIIXngCm0mZGWCIK3N3gvXAfEbPqI",
  authDomain: "tiptaptone-bsit3c.firebaseapp.com",
  databaseURL: "https://tiptaptone-bsit3c-default-rtdb.firebaseio.com",
  projectId: "tiptaptone-bsit3c",
  storageBucket: "tiptaptone-bsit3c.firebasestorage.app",
  messagingSenderId: "1071174815323",
  appId: "1:1071174815323:web:db4c449808e336d68db97e",
  measurementId: "G-0CCZLRDXX9"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(asyncStorage)
})
const database = getDatabase(app);

export { app, auth, database };
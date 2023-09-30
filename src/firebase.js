import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBKNK1Vqexoe67LS48_CEbcEfqWO1gQpFg",
  authDomain: "shivaji-portfolio.firebaseapp.com",
  projectId: "shivaji-portfolio",
  storageBucket: "shivaji-portfolio.appspot.com",
  messagingSenderId: "731014255063",
  appId: "1:731014255063:web:b31c1a91636701a59b3b92"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEybd3vKeY-utG4471A459NKDq_UVhwJw",
  authDomain: "fir-auth-pr05.firebaseapp.com",
  projectId: "fir-auth-pr05",
  storageBucket: "fir-auth-pr05.appspot.com",
  messagingSenderId: "764475226158",
  appId: "1:764475226158:web:d5f87e449bb454fa3947bf",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

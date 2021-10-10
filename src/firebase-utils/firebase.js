import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAmBIz3-cE4SNqrPxadHhdFuGCeGoWh-lQ",
  authDomain: "soul-clothing-4e6df.firebaseapp.com",
  projectId: "soul-clothing-4e6df",
  storageBucket: "soul-clothing-4e6df.appspot.com",
  messagingSenderId: "1032614326332",
  appId: "1:1032614326332:web:9e2b7006f85c4951a39339",
  measurementId: "G-T28ME7B8K8",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider).then(console.log).catch(console.log);

export default firebase;

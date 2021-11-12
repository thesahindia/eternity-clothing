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

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({ email, displayName, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsToObj = (collections) => {
 const tranformedCollections = collections.docs.reduce((accum, doc)=> {
    accum[doc.data().title.toLowerCase()] = doc.data()
    return accum;
  }, {})
 
  return tranformedCollections;
}

export const convertProductsToObj = (products) => {
  const tranformedProducts = products.docs.reduce((accum, doc)=> {
     accum[doc.data().id] = doc.data()
     return accum;
   }, {})
   return tranformedProducts;
 }

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

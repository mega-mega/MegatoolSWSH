import firebase from "firebase";
import "firebase/firestore";
import { AsyncStorage } from "react-native";
import ENV from "./env.json";

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
  appId: ENV.FIREBASE_APP_ID,
  measurementId: ENV.FIREBASE_MEASUREMENT_ID,
};
const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = firebaseApp
  .firestore()
  .enablePersistence()
  .then(() => {
    return firebase.firestore();
  })
  .catch((err) => {
    console.log(err);
    return firebase.firestore();
  });

/**
 * 匿名認証してuidを保存する
 */
export const login = async () => {
  firebase
    .auth()
    .signInAnonymously()
    .catch((error) => {
      console.log(error);
    });
  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      await AsyncStorage.setItem("uid", user.uid);
    }
  });
};

export default db;

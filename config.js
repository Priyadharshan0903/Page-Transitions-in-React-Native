import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2Q45UcwetpXGCdRUcxwUP8Rg73_kwGqI",
  authDomain: "nfc-msg.firebaseapp.com",
  projectId: "nfc-msg",
  storageBucket: "nfc-msg.appspot.com",
  messagingSenderId: "72991700589",
  appId: "1:72991700589:web:80baaa0c58b47175767164",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };

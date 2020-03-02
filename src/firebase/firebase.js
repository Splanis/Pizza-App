import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "thesis-pcbuilding.firebaseapp.com",
    databaseURL: "https://thesis-pcbuilding.firebaseio.com",
    projectId: "thesis-pcbuilding",
    storageBucket: "thesis-pcbuilding.appspot.com",
    messagingSenderId: "146600229978",
    appId: "1:146600229978:web:e89e11658ac5eec013ac63"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

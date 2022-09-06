

const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyC2TT_kb4i6gYU8gwhPPelC2_QZAnJ-Bl0",
    authDomain: "node-react-1462b.firebaseapp.com",
    projectId: "node-react-1462b",
    storageBucket: "node-react-1462b.appspot.com",
    messagingSenderId: "231870930003",
    appId: "1:231870930003:web:955b2b5788d4ca03b8faa6",
    measurementId: "G-BNWTR2P177"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const User = db.collection("Users");

module.exports = User;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
	apiKey: "AIzaSyA5z1PyT0dkImMXdtPMREZv7gtKNNuunmg",
	authDomain: "clone-76a5d.firebaseapp.com",
	projectId: "clone-76a5d",
	storageBucket: "clone-76a5d.appspot.com",
	messagingSenderId: "726513453932",
	appId: "1:726513453932:web:328ae437c439686e768149",
	measurementId: "G-HBLDE51JYF",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };

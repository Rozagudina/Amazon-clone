// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
	apiKey: "AIzaSyAYey5hQxDPuozckwWwRZXjfvfovdRSIto",
	authDomain: "clone-46817.firebaseapp.com",
	projectId: "clone-46817",
	storageBucket: "clone-46817.appspot.com",
	messagingSenderId: "779167108344",
	appId: "1:779167108344:web:dc31595d42087d40a5ff0d",
	measurementId: "G-KCZTK7HRR4",
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth};
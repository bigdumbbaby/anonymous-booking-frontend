import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyCXJScHFtYAJdFup10AWqLeBRvv_VnozoE",
  authDomain: "anonymous-booking.firebaseapp.com",
  projectId: "anonymous-booking",
  storageBucket: "anonymous-booking.appspot.com",
  messagingSenderId: "14007036713",
  appId: "1:14007036713:web:f8cb4562ff01d04da86538",
  measurementId: "G-MBNF26L49W"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()

export {
  storage, firebase as default
}

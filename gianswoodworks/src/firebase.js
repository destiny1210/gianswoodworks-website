// import firebase from "./firebase";
// import "firebase/compat/database";
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    // apiKey: "AIzaSyCL3HTFsdw4U04K1dPyk3N2Q31t8vD2SD0",
    // authDomain: "gian-s-woodworks.firebaseapp.com",
    // databaseURL: "https://gian-s-woodworks-default-rtdb.firebaseio.com",
    // projectId: "gian-s-woodworks",
    // storageBucket: "gian-s-woodworks.appspot.com",
    // messagingSenderId: "552379451426",
    // appId: "1:552379451426:web:3c8220e23b005487f2e27b",
    // measurementId: "G-93XBXRM80X"

    apiKey: "AIzaSyCrZzncCJuo8KnEtLquNYmDn0fKpcDYGsU",
    authDomain: "gian-s-website.firebaseapp.com",
    projectId: "gian-s-website",
    storageBucket: "gian-s-website.appspot.com",
    messagingSenderId: "1063903726518",
    appId: "1:1063903726518:web:c867b7fd59293ccbfbcf17"
  };


  // export default {firebase}

  // export default fireDb.database().ref();

  const app = initializeApp(firebaseConfig);
  const fireDb = getFirestore(app);
  export default fireDb;
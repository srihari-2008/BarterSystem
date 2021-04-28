import * as firebase from "firebase"
require("@firebase/firestore")
var firebaseConfig={
    
    apiKey: "AIzaSyBgaMoLO1CMvo72G1Voy3MRgnGdaVxB36k",
    authDomain: "barter-system-bdf4b.firebaseapp.com",
    projectId: "barter-system-bdf4b",
    storageBucket: "barter-system-bdf4b.appspot.com",
    messagingSenderId: "881031923411",
    appId: "1:881031923411:web:6de260ed641a3aa13a7626"
    
}

firebase.initializeApp(firebaseConfig)
export default firebase.firestore()
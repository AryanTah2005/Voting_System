import './App.css';
import Home from './Frontend/Home';
import { doc as Doc, getFirestore, updateDoc, collection, getDocs, increment } from "firebase/firestore"
import { initializeApp } from "firebase/app";

function App() {
  const firebaseConfig = {
    apiKey: "UR_API_KEY",
    authDomain: "davvotingsystem.firebaseapp.com",
    projectId: "davvotingsystem",
    storageBucket: "davvotingsystem.appspot.com",
    messagingSenderId: "133873301687",
    appId: "1:133873301687:web:9eea536c39f88b3ddb7532",
    measurementId: "G-T5Y8TSSW17"
  };

  // Initialize Firebase
  initializeApp(firebaseConfig)

  // Initialize Firestore
  const db = getFirestore() 

  // Initialize Collection
  const colRef = collection(db, 'candidates')

  function incrementVote(selections){
    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          selections.forEach((selection) => {
            if(doc.id === selection.designation){
              updateDoc(Doc(db, 'candidates', doc.id), {
                [selection.name]: increment(1)
              })
            }
          })
        })
      })
  }

  return (
    <div className="App">
      <Home incrementVote={incrementVote} />
    </div>
  );
}

export default App;

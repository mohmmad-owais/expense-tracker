import firebase from 'firebase';


const config ={
    apiKey: "AIzaSyC9OifUQ0FwwdJrjrHYF3nX0rZSBX-1x-k",
    authDomain: "expense-tracker-b3f73.firebaseapp.com",
    projectId: "expense-tracker-b3f73",
    storageBucket: "expense-tracker-b3f73.appspot.com",
    messagingSenderId: "514601712504",
    appId: "1:514601712504:web:1cadbf21675b2502eb268d"
}

firebase.initializeApp(config);

export default firebase;
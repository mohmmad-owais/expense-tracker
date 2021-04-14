importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyC9OifUQ0FwwdJrjrHYF3nX0rZSBX-1x-k",
    authDomain: "expense-tracker-b3f73.firebaseapp.com",
    projectId: "expense-tracker-b3f73",
    messagingSenderId: "514601712504",
    appId: "1:514601712504:web:1cadbf21675b2502eb268d"

})

firebase.messaging();


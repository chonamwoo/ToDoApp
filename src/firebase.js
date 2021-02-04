import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDac0ihH1iisnWMFigdn0UQDIWtzPSOp08",
        authDomain: "todo-app-256e3.firebaseapp.com",
        projectId: "todo-app-256e3",
        storageBucket: "todo-app-256e3.appspot.com",
        messagingSenderId: "316798938789",
        appId: "1:316798938789:web:b91994f2ac732baa71e74c",
        measurementId: "G-3M19FG3PSW"
     
});

const db = firebaseApp.firestore();

export default db;
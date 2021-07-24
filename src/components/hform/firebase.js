import firebase from "firebase";
import React from 'react';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDMcEBCYdDvNeQ3oOApH8DSHusPX27aem0",
    authDomain: "myfirstapp-19f11.firebaseapp.com",
    projectId: "myfirstapp-19f11",
    storageBucket: "myfirstapp-19f11.appspot.com",
    messagingSenderId: "416159073522",
    appId: "1:416159073522:web:48af72b62ae145dab43c6b",
    measurementId: "G-NEB92K20RF"
});

var db = firebaseApp.firestore();

export { db };
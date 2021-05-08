import firebase from 'firebase'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: 'AIzaSyAjL7NqKmEud5z99hCzdYJcTIyG3fHjpU8',
    authDomain: 'xchange-d540b.firebaseapp.com',
    databaseURL: 'https://xchange-d540b.firebaseio.com',
    projectId: 'xchange-d540b',
    storageBucket: 'xchange-d540b.appspot.com',
    messagingSenderId: '683426425539',
    appId: '1:683426425539:web:f0a3e55417122a1f9f9076'

}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()


export default Firebase
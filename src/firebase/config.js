import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCZFZEErxlW2TrYzUpcoOCc1brmNyW3d2I",
    authDomain: "vue-with-firebase-cb616.firebaseapp.com",
    projectId: "vue-with-firebase-cb616",
    storageBucket: "vue-with-firebase-cb616.appspot.com",
    messagingSenderId: "566612081614",
    appId: "1:566612081614:web:c5307133bba856fb67099f"
  };

  //init firebase
  firebase?.initializeApp(firebaseConfig)

  //init firestore service
  const projectFirestore = firebase?.firestore()

  export { projectFirestore }
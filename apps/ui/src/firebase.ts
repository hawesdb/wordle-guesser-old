// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export { initializeFirebase }

var initializeFirebase = function () {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyAOKYqw8sJNX4J9NzMfijnKDBwAIrOkPgM',
    authDomain: 'wordle-guesser.firebaseapp.com',
    projectId: 'wordle-guesser',
    storageBucket: 'wordle-guesser.appspot.com',
    messagingSenderId: '668931639134',
    appId: '1:668931639134:web:d0cb04208ef98f5a28b1cf'
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
}

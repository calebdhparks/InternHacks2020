import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
      apiKey: "AIzaSyBJccMIhBOw4dJYg0MWXbFW1-tmCep7dpI",
      authDomain: "ping-a-job.firebaseapp.com",
      databaseURL: "https://ping-a-job.firebaseio.com",
      projectId: "ping-a-job",
      storageBucket: "ping-a-job.appspot.com",
      messagingSenderId: "8800435423",
      appId: "1:8800435423:web:2497e41fe4521255007d6a",
      measurementId: "G-9VHJ3DJQDE"
    };
    class Firebase {
      constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();

      }
      // *** Auth API ***
      doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

      doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

      doSignOut = () => this.auth.signOut();
      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

      doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

        // *** User API ***

        user = uid => this.db.ref(`users/${uid}`);

        users = () => this.db.ref('users');
    }

    export default Firebase

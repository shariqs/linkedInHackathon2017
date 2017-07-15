import { Component, EventEmitter } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  auth: any;  // Instance of the User coming from app.component.

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(auth => {
      this.auth = auth;
    });
  }

  /**
   * Logs in through Google.
   */
  private loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  /**
   * Logs out.
   */
  private logout() {
    this.afAuth.auth.signOut();
    location.reload();
  }
}


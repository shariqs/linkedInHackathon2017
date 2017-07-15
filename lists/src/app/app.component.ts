import {Component} from '@angular/core';
import {AppModule} from './app.module';
import { AngularFireAuth } from 'angularfire2/auth';
import { StateService } from './Services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public auth;    // Authentication object of user who is logged in. Null if not logged in.
  /**
   * Constructs an angularfire authentication token.
   */
  constructor(public afAuth: AngularFireAuth, public stateService : StateService) {
    this.afAuth.authState.subscribe(auth => {
      this.auth = auth;
    });
  }
}


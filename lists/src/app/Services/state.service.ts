import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Http } from '@angular/http';


@Injectable()
export class StateService {
    private auth;

    public active_list = null;

    constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase, public http: Http) {
        afAuth.authState.subscribe(auth => {
            if (auth) {
    
              
            }
        });
    }

    
    
}


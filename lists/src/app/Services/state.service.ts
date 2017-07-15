import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Injectable()
export class StateService {
    private auth;

    public active_list = null;

    constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase, public http: Http, public dataService : DataService) {
        afAuth.authState.subscribe(auth => {
            if (auth) {
    
              
            }
        });
    }


    updateActiveList(key : string = this.active_list.$key){
        this.active_list = this.dataService.dataCache[key];
        }
    
    
}


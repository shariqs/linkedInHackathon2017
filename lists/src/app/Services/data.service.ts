import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/take'
import { AngularFireAuth } from 'angularfire2/auth';
import { Http } from '@angular/http';


@Injectable()
export class DataService {
    private auth;

    public dataCache = [];
    public listKeys = [];


    constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase, public http: Http) {
        afAuth.authState.subscribe(auth => {
            if (auth) {
                this.auth = auth;

                this.db.list('/Users/' + auth.uid + '/Lists/').subscribe(userKeyData => {
                    for(var i = 0; i < userKeyData.length; i++){
                        var listKey = userKeyData[i].$value;
                        this.listKeys[i] = listKey;
                        this.fillCacheByKey(listKey);
                    }
                    this.listKeys = userKeyData;
                })
            }
        });
    }
    public createList(name: string = "New List"){
        let listInfo = this.db.list('Lists/').push(
            {
                name: name, 
                create_date: Date()
            });
            this.addListToUser(listInfo.key)
    }
    
    private fillCacheByKey(listKey){
         this.db.object('/Lists/' + listKey).subscribe(listData => {
                           this.dataCache[listKey] = listData;
                        });
    }

    public addListToUser(listKey : String){
        this.db.list('/Users/' + this.auth.uid + '/Lists/').push(listKey);
    }


    private getListCacheDataFromIndex(index : number){
        return this.dataCache[this.listKeys[index].$value];
    }

    private getListCacheDataFromKey(key : string){
        return this.dataCache[key];
    }

    //Doesn't Work
    private removeListByKey(key : string) {
        //console.log('/Users/' + this.auth.uid + '/Lists/'+ key);
        this.db.object('/Users/' + this.auth.uid + '/Lists/'+ key).remove();
    }

        private removeListByIndex(index : number) {
        var key = this.listKeys[index].$key;

        //console.log('/Users/' + this.auth.uid + '/Lists/'+ key);
        this.db.object('/Users/' + this.auth.uid + '/Lists/'+ key).remove();
    }
}


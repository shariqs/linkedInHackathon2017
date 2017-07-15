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
                    for (var i = 0; i < userKeyData.length; i++) {
                        var listKey = userKeyData[i].$value;
                        this.listKeys[i] = listKey;
                        this.fillCacheByKey(listKey);
                    }
                    this.listKeys = userKeyData;
                })
            }
        });
    }
    public createList(name: string = "New List") {
        let listInfo = this.db.list('Lists/').push(
            {
                name: name,
                create_date: Date()
            });
        this.addListToUser(listInfo.key)
    }

    public addItemToList(key : string, itemName: string) {
        var ar = this.dataCache[key].list_items;
        if(ar == undefined){
            ar = [];
        }
        ar.push({
            name: itemName,
            checked: false,
            author: this.auth.displayName   
        }
        );
        this.updateListItems(key, ar);
    }

    private fillCacheByKey(listKey) {
        this.db.object('/Lists/' + listKey).subscribe(listData => {
            this.dataCache[listKey] = listData;
        });
    }

    public addListToUser(listKey: String) {
        this.db.object('/Lists/' + listKey).subscribe(data => {
            if(data.name){
                this.db.list('/Users/' + this.auth.uid + '/Lists/').push(listKey);
            }
        });       
    }


    public getListCacheDataFromIndex(index: number) {
        return this.dataCache[this.listKeys[index].$value];
    }

    public getListCacheDataFromKey(key: string) {
        return this.dataCache[key];
    }

    private removeListByIndex(index: number) {
        var key = this.listKeys[index].$key;
        this.db.object('/Users/' + this.auth.uid + '/Lists/' + key).remove();
    }

   public updateListItems(key : string, array : any){
       this.db.object('/Lists/' + key + '/list_items/').set(array);
   }

   public updateUserList(newName : string, listKey : string){
       this.db.object('/Lists/' + listKey + '/name/').set(newName);
   }

   public removeItemFromList(listKey : string, index : number){
    var ar = this.dataCache[listKey].list_items;
    ar.splice(index, 1);
    this.updateListItems(listKey, ar);
   }

   public toggleChecked(listKey: string, index: number, currentState: boolean){
       this.db.object('/Lists/' + listKey + '/list_items/'+ index + '/checked').set(!currentState);
   }

    
}


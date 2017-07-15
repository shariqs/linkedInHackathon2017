import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { StateService } from '../Services/state.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  shouldRenameList : boolean = false;
  showNewItemNameComboBox : boolean = false;

  list_name_form : string = '';
  item_name_form : string = '';

  constructor(public dataService : DataService, public stateService : StateService ) { }

  private newListButtonClicked(){
    this.shouldRenameList = true;
    //this.dataService.createList();
  }

  private onlistRename(){
    //this.dataService.updateUserList(this.list_name_form);
   // this.shouldRenameList = false;
  }

  private addItemButtonPressed() {
    this.showNewItemNameComboBox = !this.showNewItemNameComboBox;
    //this.dataService.addItemToList(this.stateService.active_list.$key);
  }

   private onItemSubmit(){

    this.dataService.addItemToList(this.stateService.active_list.$key, this.item_name_form);

   this.shouldRenameList = false;
   this.item_name_form = '';
  }

  private itemRemoveButtonClicked(index : number){
    var listKey = this.stateService.active_list.$key;
    var ar = this.stateService.active_list.list_items;
    ar.splice(index, 1);
    this.dataService.updateListItems(listKey, ar);
  }
}
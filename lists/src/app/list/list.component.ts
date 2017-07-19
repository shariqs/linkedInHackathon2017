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
  showNewItemNameComboBox : boolean = true;

  list_name_form : string = '';
  item_name_form : string = '';

  constructor(public dataService : DataService, public stateService : StateService ) { }

  private newListButtonClicked(){
    this.shouldRenameList = true;
  }

  private onlistRename(){
    //this.stateService.active_list.name = this.list_name_form;
    this.dataService.updateUserList(this.list_name_form, this.stateService.active_list);
    this.shouldRenameList = false;
  }
  private onItemSubmit(){
   this.dataService.addItemToList(this.stateService.active_list, this.item_name_form);
   this.shouldRenameList = false;
   this.item_name_form = '';
  }

  private itemRemoveButtonClicked(index : number){
    var listKey = this.stateService.active_list;
    this.dataService.removeItemFromList(listKey, index);
  }

  private checkedClicked(index : number, item: any){
    this.dataService.toggleChecked(this.stateService.active_list, index, item.checked);
   
  }


}
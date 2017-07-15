import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  shouldRenameList : boolean = false;
  list_name_form : string = 'Enter List Name!';

  constructor(public dataService : DataService ) { }

  private newListButtonClicked(){
    this.shouldRenameList = true;
    //this.dataService.createList();
  }

  private onlistRename(){
    //this.dataService.updateUserList(this.list_name_form);
   // this.shouldRenameList = false;
  }
}
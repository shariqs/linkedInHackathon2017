import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list_name_form : string = ''              // String that represents the list name
  shouldRenameList : boolean = false;       // Boolean that allows list renaming

  constructor() { }

  ngOnInit() {
  }

  private renameListButtonClicked() {
    this.shouldRenameList = true;
  }

  private onListRename() {
    this.shouldRenameList = false;
    this.list_name_form = '';
  }
}
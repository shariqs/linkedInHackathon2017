import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list_name_form = ''
  shouldRenameList = false;       // Boolean that allows list renaming

  constructor() { }

  ngOnInit() {
  }

  renameList() {
    
  }

}
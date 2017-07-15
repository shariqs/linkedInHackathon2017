import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  showNewListComboBox : boolean = false;
  list_name_form : string = '';

  constructor(public dataService : DataService ) { }

  private newListButtonClicked(){
    this.showNewListComboBox = true;
    //this.dataService.createList();
  }

  private onlistSubmit(){
    this.dataService.createList(this.list_name_form);
    this.showNewListComboBox = false;
    this.list_name_form = '';
  }
  
}

import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';
import { StateService } from '../Services/state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  showNewListComboBox : boolean = false;
  list_name_form : string = '';

  constructor(public dataService : DataService, public stateService: StateService ) { }

  private newListButtonClicked(){
    this.showNewListComboBox = true;
  }

  private onlistSubmit(){
    if(this.list_name_form.charAt(0) === '-'){
      this.dataService.addListToUser(this.list_name_form.trim());
      this.showNewListComboBox = false;
      this.list_name_form = '';
    }else{
      this.dataService.createList(this.list_name_form);
      this.showNewListComboBox = false;
      this.list_name_form = '';
    }    
  }
  
  private listChosen(list : any) {    
    this.stateService.active_list = this.dataService.getListCacheDataFromKey(list.$value);
   
  }

}

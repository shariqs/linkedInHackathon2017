import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';


import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { SidebarComponent } from './sidebar/sidebar.component';

import { DataService } from './Services/data.service';

=======
import { ListComponent } from './list/list.component';
//import { SidebarComponent } from './sidebar/sidebar.component';
>>>>>>> df60ac80f6b0cc605051a6112863b3a45982f6cf
// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCDuFUbKOsVHSzhO3p3EtR3DOxAa0pUsK4",
    authDomain: "lists-40a1c.firebaseapp.com",
    databaseURL: "https://lists-40a1c.firebaseio.com",
    projectId: "lists-40a1c",
    storageBucket: "lists-40a1c.appspot.com",
    messagingSenderId: "226779671073"
};


@NgModule({
  declarations: [
    AppComponent,
  LoginComponent,
  ListComponent,
  //SidebarComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NguiAutoCompleteModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

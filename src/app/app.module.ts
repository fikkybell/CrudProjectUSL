import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ModalDismissReasons, NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ApiService } from './api.service';
import { DetailPageComponent } from './detail-page/detail-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewPageComponent,
    UserComponent,
    TableComponent,
    NavBarComponent,
    DetailPageComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, 
    NgbModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

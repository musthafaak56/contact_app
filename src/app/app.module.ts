import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { NavbarComponent } from './navbar/navbar.component';

import{HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContactManagerComponent,
    UpdateContactComponent,
    ViewContactComponent,
    PageNotFoundComponent,
    AddContactComponent,
    NavbarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

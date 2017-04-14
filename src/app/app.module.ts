import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdlModule } from '@angular-mdl/core';
import { AngularFireModule } from 'angularfire2';

import {InputTextModule, ButtonModule, ConfirmDialogModule} from 'primeng/primeng';


import { environment } from '../environments/environment';
import { CoffeeEditComponent } from './coffee-edit/coffee-edit.component';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  declarations: [
    AppComponent,
    CoffeeEditComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdlModule,
    AngularFireModule.initializeApp(environment.firebase),
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule
    ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
// import { HttpModule } from '@angular/'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    // HttpModule
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }

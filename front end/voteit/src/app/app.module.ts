import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FootComponent } from './components/foot/foot.component';
import { WtvComponent } from './components/wtv/wtv.component';
import { GetinfoarmyComponent } from './components/getinfoarmy/getinfoarmy.component';
import { OnclkarmyComponent } from './components/onclkarmy/onclkarmy.component';
import { OnclknriComponent } from './components/onclknri/onclknri.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FootComponent,
    WtvComponent,
    GetinfoarmyComponent,
    OnclkarmyComponent,
    OnclknriComponent,
    AdminloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

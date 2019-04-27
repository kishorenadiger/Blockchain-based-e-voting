import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
import { from } from 'rxjs';
import { componentHostSyntheticProperty } from '@angular/core/src/render3';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { GetdetailsComponent } from './components/getdetails/getdetails.component';

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
    AboutComponent,
    HomeComponent,
    GetdetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot([
      { path :'home' , component : HomeComponent},
      { path :'about' ,component : AboutComponent},
      { path :'wantovote/army',component : OnclkarmyComponent },
      { path :'wantovote/nri',component : OnclknriComponent },
      { path :'wantovote' , component : WtvComponent},
      { path :'admin',component : AdminloginComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

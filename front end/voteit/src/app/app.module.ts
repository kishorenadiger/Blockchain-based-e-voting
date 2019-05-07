import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { VoteComponent } from './components/vote/vote.component';

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
    // VoteComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule,RouterModule.forRoot([
      { path :'home' , component : HomeComponent},
      { path :'about' ,component : AboutComponent},
      { path :'wantovote/army',component : OnclkarmyComponent },
      { path :'wantovote/nri',component : OnclknriComponent },
      { path :'wantovote' , component : WtvComponent},
      { path :'admin',component : AdminloginComponent },
      // { path :'vote',component : VoteComponent },
      {path: 'getdetails', component : GetdetailsComponent},
      {path: 'details', component : GetinfoarmyComponent},

      { path: '', component : HomeComponent }

    ]), BrowserAnimationsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

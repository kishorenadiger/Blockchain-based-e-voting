import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import {nodemailer} from '../../../../node_modules/nodemailer'

// const nodemailer = require('nodemailer');
// const log = console.log;

// require('dotenv').config();
// import { HttpService } from "../Shared/http.service";
import { HttpService } from "../../Shared/http.service";

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgForm} from '@angular/forms';
import { OVERLAY_KEYBOARD_DISPATCHER_PROVIDER } from '@angular/cdk/overlay/typings/keyboard/overlay-keyboard-dispatcher';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-getinfoarmy',
  templateUrl: './getinfoarmy.component.html',
  styleUrls: ['./getinfoarmy.component.scss']
})

export class GetinfoarmyComponent implements OnInit {
  myForm: FormGroup; 
  loading = false;
  buttionText = "Submit";
  constructor(private fb:FormBuilder,public http: HttpService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
    })
    
  }
  
 
  onSubmit(f: NgForm){
   

   let l=8;
  var text = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}


console.log("The Random Id is   "+text);
window.confirm('Confirm that the email is '+f.value.em) ;
console.log(f.value);

this.loading = true;
this.buttionText = "Submiting...";
let user = {
  name: f.value.name,
  email: f.value.em,
  rno : text,
}

this.http.httpPost
this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
  data => {
    let res:any = data; 
    console.log(
      `${user.name} is successfully register and mail has been sent and the message id is ${res.messageId} with random no ${user.rno}`
    );
  },
  err => {
    console.log(err);
    this.loading = false;
    this.buttionText = "Submit";
  },() => {
    this.loading = false;
    this.buttionText = "Submit";
  }
);

  }

}

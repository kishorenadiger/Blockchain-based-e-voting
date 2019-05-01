import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-getinfoarmy',
  templateUrl: './getinfoarmy.component.html',
  styleUrls: ['./getinfoarmy.component.scss']
})
export class GetinfoarmyComponent implements OnInit {
  myForm: FormGroup; 

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({

    })
    
  }

  get email() {
    return this.myForm.get('email');
  }
  
  get name() {
    return this.myForm.get('name');
  }
  get phno() {
    return this.myForm.get('phno');
  }

  get sex() {
    return this.myForm.get('sex');
  }
  get addr() {
    return this.myForm.get('addr');
  }

 onSubmit(){
   let l=8;
  var text = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}


console.log(text);

  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  myForm: FormGroup; 

constructor(private fb: FormBuilder) { }

ngOnInit() {
  this.myForm = this.fb.group({
    email:['',[Validators.pattern('admin')]],
    password: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('12345')
    ]],
  })
}
get email() {
  return this.myForm.get('email');
}

get password() {
  return this.myForm.get('password');
}


}

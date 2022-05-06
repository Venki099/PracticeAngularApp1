import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.css']
})
export class FormdemoComponent implements OnInit {

  myForm: FormGroup | any;
  userName: FormControl|any;
  userEmail:FormControl|any;
  password:FormControl|any;
  confirmpassword:FormControl|any;
  phoneNumber:FormControl|any;

  
  constructor() { }

  ngOnInit(): void {
    this.userName = new FormControl('',[Validators.required, Validators.minLength(10),])
    this.userEmail = new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
    this.password = new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$')])
    this.confirmpassword = new FormControl('')
    this.phoneNumber = new FormControl('',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')])
    this.myForm = new FormGroup({
      'userName':this.userName,
      'userEmail':this.userEmail,
      'password':this.password,
      'confirmpassword':this.confirmpassword,
      'phoneNumber':this.phoneNumber
    }) ;
  }

}

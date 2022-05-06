import { Component, OnInit,Input } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  users:any[];

  constructor(private _studentService: CustomerService) { 
    this.users = this._studentService.getCustomer();
  }

  @Input()user!:any;

  userDetail = false;
  showUserDetailsToggle(){
    this.userDetail = !this.userDetail;
  }

  getClass(){
    var classList = '';
    if(this.userDetail){
    classList = 'fa fa-plus';
  }else{
    classList = 'fa fa-minus';
  }
  return classList;
  }

  ngOnInit(): void {
  }

}

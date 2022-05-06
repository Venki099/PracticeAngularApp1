import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  getCustomer(): any[]{
    return[
      {
        "address":{
          "city": "kilcoole",
          "street": "new road",
          "number": 7682,
          "zipcode": "12926-3874"
        },
        "id": 1,
        "email": "john@gmail.com",
        "username": "johnd",
        "password": "m38rmF$",
        "image":"https://m.media-amazon.com/images/I/41jLBhDISxL._SY355_.jpg",
        "name": {
          "firstname": "john",
          "lastname": "doe"
        },
        "phone": "1-570-236-7033",
      },
      {
        "address": {
       
          "city": "Cullman",
          "street": "Frances Ct",
          "number": 86,
          "zipcode": "29567-1452"
        },
        "id": 3,
        "email": "kevin@gmail.com",
        "username": "kevinryan",
        "password": "kev02937@",
        "image":"https://m.media-amazon.com/images/I/41jLBhDISxL._SY355_.jpg",
        "name": {
          "firstname": "kevin",
          "lastname": "ryan"
        },
        "phone": "1-567-094-1345",
       
      },
      {
        "address": {
        
          "city": "San Antonio",
          "street": "Hunters Creek Dr",
          "number": 6454,
          "zipcode": "98234-1734"
        },
        "id": 4,
        "email": "don@gmail.com",
        "username": "donero",
        "password": "ewedon",
        "image":"https://m.media-amazon.com/images/I/41jLBhDISxL._SY355_.jpg",
        "name": {
          "firstname": "don",
          "lastname": "romer"
        },
        "phone": "1-765-789-6734",
       
      },
    ]
  }

  constructor() { }
}

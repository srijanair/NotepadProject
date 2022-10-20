import { AstTransformer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { doesNotMatch } from 'assert';

export interface UserList {
  firstname : string;
  lastname: string;
  contact: number;
  email: string;
}

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
  }

  public User: UserList[] = [
    { firstname: 'Arsan', lastname: 'Miths', contact: 9998899877, email:'arsandoe@gmail.com' },
    { firstname: 'Bobby', lastname: 'Morris', contact: 1019998080, email:'bobbymorris@gmail.com' },
    { firstname: 'Charlie', lastname: 'Davis', contact: 1110007676, email:'charliedavis@gmail.com' },
    { firstname: 'Danny', lastname: 'Wilson', contact: 808080999, email:'dannywilson@gmail.com' },
    { firstname: 'Ena', lastname: 'Wright', contact: 808080999, email:'dannywilson@gmail.com' },
  ]
}

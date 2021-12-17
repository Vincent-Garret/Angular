import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import jwt_decode from "jwt-decode";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  token:any = localStorage.getItem('auth')
  user:any = jwt_decode(this.token)
  roleUser: boolean = false

  ngOnInit(): void {
    if(this.user.role == "admin" || this.user.role == "agent"){
      this.roleUser = true
    }
    else {
      this.roleUser = false
    }
  }


}

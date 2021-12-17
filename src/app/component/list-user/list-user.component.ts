import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/service/http.service';
import { DeleteService } from 'src/app/shared/service/delete.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: any[] = []
  token:any = localStorage.getItem('auth')
  user:any = jwt_decode(this.token)
  roleUser:number = 0
  
  constructor(private httpService:HttpService, private deleteService:DeleteService) { }
  
  ngOnInit(): void {
    if(this.user.role == "admin"){
        this.roleUser = 1
    }
    else if(this.user.role == "admin"){
      this.roleUser = 2
    }
    else {
      this.roleUser = 0
    }
    this.getUsers();
  }

  getUsers(){
    this.httpService.getUsers()
    .then(users => this.users = users)
    .catch( err => console.log)
  }

  deleteUser(index:number){
    this.deleteService.deleteUser(index)
    .then(() =>this.getUsers())
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/service/http.service';
import { DeleteService } from 'src/app/shared/service/delete.service';
import jwt_decode from "jwt-decode";



@Component({
  selector: 'app-list-property',
  templateUrl: './list-property.component.html',
  styleUrls: ['./list-property.component.css']
})
export class ListPropertyComponent implements OnInit {

  properties: any[] = []
  token:any = localStorage.getItem('auth')
  user:any = jwt_decode(this.token)
  roleUser:boolean = false

  constructor(private httpService:HttpService, private deleteService:DeleteService) { }

  ngOnInit(): void {
    this.getProperties();
      if(this.user.role == "admin" || this.user.role == "agent"){
        this.roleUser = true
      }
      else {
        this.roleUser = false
      }
    }
  
  getProperties(){
    this.httpService.getProperties()
    .then(properties => this.properties = properties)
    .catch( err => console.log)
  }
  
  deleteProperty(index:number){
    this.deleteService.deleteProperty(index)
    .then(() => this.getProperties())
  }
}

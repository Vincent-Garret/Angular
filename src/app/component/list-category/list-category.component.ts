import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/service/http.service';
import { DeleteService } from 'src/app/shared/service/delete.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categories: any[] = []
  token:any = localStorage.getItem('auth')
  user:any = jwt_decode(this.token)
  roleUser:boolean = false

  constructor(private httpService:HttpService, private deleteService:DeleteService) { }

  ngOnInit(): void {
    if(this.user.role == "admin" || this.user.role == "admin"){
      this.roleUser = true
    }
    else {
      this.roleUser = false
    }
      this.getCategories();
    }
  
  getCategories(){
    this.httpService.getCategories()
    .then(categories => this.categories = categories)
    .catch( err => console.log)
  }
  
  deleteCategory(index:number){
    this.deleteService.deleteCategory(index)
    .then(() => this.getCategories())
  }
  


}

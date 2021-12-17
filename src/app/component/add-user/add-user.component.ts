import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddService } from 'src/app/shared/service/add.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm = this.fb.group({
    name:[''],
    role:[''],
    password:[''],
    age:[''], 
    phone: ['']
  })
  user: {} = {}

  

  constructor(private fb:FormBuilder, private addService:AddService, private router: Router) { }

  ngOnInit(): void {
  }

  submit():void {
    let user = this.userForm.value
    let token = localStorage.getItem('auth')
    console.log(token)
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept'       : 'application/json',
      'Authorization': "Bearer " + token
    })
    console.log(JSON.stringify(user))
    console.log(header)
    this.addService.postUser(user, header)
    .then( () => {
      this.router.navigate(['/users'])
    })
    .catch( err => console.log(err))
  }

}

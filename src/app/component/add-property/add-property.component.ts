import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddService } from 'src/app/shared/service/add.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Property } from 'src/app/shared/model/property';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  userForm = this.fb.group({
    name:[''],
    price:[''],
    sector:[''],
    roomNb:[''],
    picture:[''], 
    description: [''],
    keywords:['']
  })
  picture:any
  property: {} = {}

  constructor(private fb:FormBuilder, private addService:AddService, private router: Router) { }

  ngOnInit(): void {
  }

  submit():void {
    let property = this.userForm.value
    const data = new FormData();
    if(this.picture)
    data.append('picture', this.picture, this.userForm.value.picture);
    console.log(data)
    this.addService.postProperty(property)
    .then( () => {
      this.router.navigate(['/'])
    })
    .catch( err => console.log(err))
  }
}


// this.customerService.addCustomer(customer, this.id).then(() => {
//   // Apres l enregistrement du client, j upload sa photo
//   const data = new FormData();
//   if (this.file) {
//     data.append('logo', this.file, this.file.name);
//     this.customerService.saveCustomer(data, this.id).then(() => {});
//   }
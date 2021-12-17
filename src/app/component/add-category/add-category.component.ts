import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddService } from 'src/app/shared/service/add.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Property } from 'src/app/shared/model/property';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent implements OnInit {

  userForm = this.fb.group({
    name:[''],
  })
  category: {} = {}
  

  constructor(private fb:FormBuilder, private addService:AddService, private router: Router) { }

  ngOnInit(): void {

  }


  submit():void {
    let category = this.userForm.value
    this.addService.postCategory(category)
    .then( () => {
      this.router.navigate(['/categories'])
    })
    .catch( err => console.log(err))
  }

}

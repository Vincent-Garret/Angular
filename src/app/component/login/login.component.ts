import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/shared/service/authentification.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    name:['', Validators.required],
    password: ['',Validators.required],
  })

  token:string = ""


  constructor(private authentificationService :AuthentificationService, private fb:FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }

  getToken(){
    this.authentificationService.getToken(this.loginForm.value)
    .then( () => {
      this.router.navigate(['/'])
    })
    .catch( err => console.log(err))
  }

}

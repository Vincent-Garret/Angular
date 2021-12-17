import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  getToken(data: Object):Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/users' + '/login' ,data)
        .subscribe( {
          next: (token:any) => {
            localStorage.setItem('auth', token.token)
            resolve(token)
           } ,
          error: () => reject, 
        })
    })
  }

}

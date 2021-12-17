import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http:HttpClient) { }

  postUser(user:Object, headers:any):Promise<any> {
    let options = {headers: headers}
    console.log(options)
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/users', user, options)
      .subscribe( {
        next: token => {resolve(token)},
        error: () => reject
      })
    })
  }
  postProperty(Property:Object):Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/properties', Property)
      .subscribe( {
        next: token => {resolve(token)},
        error: () => reject
      })
    })
  }

  postCategory(Category:Object):Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/categories', Category)
      .subscribe( {
        next: token => {resolve(token)},
        error: () => reject
      })
    })
  }


}

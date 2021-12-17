import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getProperties():Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/properties')
      .subscribe( {
        next: properties => {resolve(properties)},
        error: () => reject
      })
    })
  }

  getOneProperty(index: number):Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/properties/' + index)
      .subscribe( {
        next: properties => {resolve(properties)},
        error: () => reject
      })
    })
  }

  getUsers():Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/users')
      .subscribe( {
        next: users => {resolve(users)},
        error: () => reject
      })
    })
  }

  getOneUser(index: number):Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/users/' + index)
      .subscribe( {
        next: users => {resolve(users)},
        error: () => reject
      })
    })
  }

  getCategories():Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/categories')
      .subscribe( {
        next: categories => {resolve(categories)},
        error: () => reject
      })
    })
  }

  login(body:Object):Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/users/login', body)
      .subscribe( {
        next: token => {resolve(token)},
        error: () => reject
      })
    })
  }


}

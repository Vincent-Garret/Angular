import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) { }

  deleteProperty(index:number) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/properties/' + index)
      .subscribe( {
        next: property => {resolve(property)},
        error: () => reject
      })
    })
  }

  deleteUser(index:number) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/users/' + index)
      .subscribe( {
        next: user => {resolve(user)},
        error: () => reject
      })
    })
  }

  deleteCategory(index:number) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/categories/' + index)
      .subscribe( {
        next: category => {resolve(category)},
        error: () => reject
      })
    })
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

base_url='https://ums-server-angular.onrender.com'
  constructor(private http:HttpClient) { }

  // add user

  addUser(bodyData:any){
    return this.http.post(`${this.base_url}/users`,bodyData)
  }

  // get users

  getUser(){

    return this.http.get(`${this.base_url}/users`)
  }


  // delet user
  deleteUser(id:any){
    return this.http.delete(`${this.base_url}/users/${id}`)
  }

  // access single user


  getUserData(uid:any){
    return this.http.get(`${this.base_url}/users/${uid}`)
  }

  // update user

  updateUser(id:any,bodyData:any){
    return this.http.put(`${this.base_url}/users/${id}`,bodyData)
  }
}

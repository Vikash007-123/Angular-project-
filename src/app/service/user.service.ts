import { User } from './../user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserService {

 private baseUrl="http://localhost:8080/mhire/users";
 private signupUrl="http://localhost:8080/mhire//users/signup";
 private uploadImage="http://localhost:8080/mhire//users/sarooshGull1@gmail.com";

  constructor(private http:HttpClient) { }

 
  register(user: User) {  
    return this.http.post(`${this.signupUrl}`,user);  
  } 

 
  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }
  public doRegistration(user:User){
    return this.http.post(this.baseUrl,user,{responseType:'text' as 'json'});
  }
 
  updateUser(email: String, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/email/${email}`, value);
  }

  


}

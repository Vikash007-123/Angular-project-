import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 private baseUrl="http://localhost:8080/mhire/users/upload";
  private loginUrl="http://localhost:8080/mhire//users/login/siri@gmail.com/sirisha";
 private baseUrl1 = 'http://localhost:8080/mhire/users';

  constructor(private http:HttpClient) { }

  loginUsers(user:object){
   this.http.post<any>(this.loginUrl,user);
  }

  createuser(user: object): Observable<Object> {  
    return this.http.post(`${this.baseUrl}`,user);  
  }  
  public doRegistration(user){
    return this.http.post(this.baseUrl,user,{responseType:'text' as 'json'});
  }
  updateUser(email: String, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl1}/${email}`, value);
  }

}

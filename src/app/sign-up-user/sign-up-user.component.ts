import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-user',
  templateUrl: './sign-up-user.component.html',
  styleUrls: ['./sign-up-user.component.css']
})
export class SignUpUserComponent implements OnInit {
  router: any;
  emailAdd:string;
  Password:string;
  confPass:string;

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
    
  }
  gotologin(){
    this.route.navigate(['login']);
  }
  // signUp():void{
  //   if(this.emailAdd=='admin123@gmail.com' && this.Password=='admin' && this.confPass=='admin'){
  //     this.route.navigate(['login']);
  //    } else{
  //     alert("Invalid credentials");
  //     }
    
  //}


}

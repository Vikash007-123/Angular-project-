import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SignUpUserComponent } from '../sign-up-user/sign-up-user.component';
import { Router, RouterModule } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{UserService} from '../service/user.service';
import { User } from '../user';



@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  router: any;
  email: string;
  password: string;
  loginForm: FormGroup;
  submitted = false;
  loginuserData={};
  user : User=new User();  

  constructor(
     private route: Router,
     public dialog: MatDialog,
     private formBuilder: FormBuilder,
     private userservice:UserService,
     private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
     
      
  });
  }
 
  // loginUser(){
  //   this.userservice.loginUsers(this.user)
  //   .subscribe(data => console.log(data), error => console.log(error));
    

  // }
 
 


  onSubmit() {
 
    this.submitted = true;
   
    // stop the process here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    else {
      if(this.email == 'admin123@gmail.com' && this.password == 'admin'){
      this.route.navigate(['home']);
    }
    else{
      this.dialog.open(DialogComponent);

    }
  }
    
  
    
}
  
  
   gotoHome() {
    // this.router.navigate(['/signup']);
    this.route.navigate(['home']);
   }

  // login() : void {
  //   if(this.email == 'admin123@gmail.com' && this.password == 'admin'){
  //    this.route.navigate(['home']);
  //    } else {
      
      
  //        this.dialog.open(DialogComponent);
      
  //    }
  // }
}
  



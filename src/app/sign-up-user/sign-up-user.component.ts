import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-sign-up-user',
  templateUrl: './sign-up-user.component.html',
  styleUrls: ['./sign-up-user.component.css']
})
export class SignUpUserComponent implements OnInit {
  router: any;
  loading = false;
  submitted = false;
  user : User=new User();  
  registerForm: FormGroup;
  email: string;
  password: string;
  confpassword:string;
  message:any;

  constructor(
    private route: Router,
    private userservice:UserService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required,Validators.email],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confpassword: ['', [Validators.required, Validators.minLength(6)]]
    })
    
  }
  // get f() { return this.registerForm.controls; }

//   onSubmit() {
//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.registerForm.invalid) {
//         return;
//     }

//     this.loading = true;
//     this.userservice.register(this.registerForm.value)
//         .pipe(first())
//         .subscribe(
//             data => {
//                 this.message="succesfull";
//                 this.router.navigate(['/login']);
//             },
//             error => {
//                 this.message="error";
//                 this.loading = false;
//             });
// }

onSubmit() {
  this.submitted = true;
  this.save();    
 }
 save1() {
  this.userservice.register(this.user)
     .subscribe(data => console.log(data), error => console.log(error));
   this.user= new User();

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
  // onSubmit() {
  //   this.submitted = true;
  //   this.save();    
  //  }
  save() {
    //   //remove this once login page created
    //   // this.client.clientPassword="Default"
      
       this.userservice.register(this.user)
         .subscribe(data => {
          this.route.navigate(['login']);
           console.log(data)},
            error => console.log(error));
       this.user= new User();
    //   // this.gotoList();
     }


}

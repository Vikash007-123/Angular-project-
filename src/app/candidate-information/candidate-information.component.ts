import { User } from './../user';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from '../service/user.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: "app-candidate-information",
  templateUrl: "./candidate-information.component.html",
  styleUrls: ["./candidate-information.component.css"],
})
export class CandidateInformationComponent implements OnInit {
  // dropdownList = [];
  // selectedItems = [];
  selected=[];
  items=[];
  // dropdownSettings:IDropdownSettings ;
 

 

  constructor(private userservice:UserService) {}
  user : User=new User();  
  message:any;
  email:String;
  submitted = false;  

  ngOnInit(): void {
    this.items = [
      { id: 1, name: "Python" },
  
      { id: 2, name: "Node Js" },
  
      { id: 3, name: "Java" },
  
      { id: 4, name: "PHP" },
  
      { id: 5, name: "Django" },
  
      { id: 6, name: "Angular" },
  
      { id: 7, name: "Vue" },
  
      { id: 8, name: "ReactJs" },
    ];
    this.submitted = false;  
    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangaluru' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text: 'New Delhi' }
    // ];
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
    // this.dropdownSettings = {
    //   singleSelection: false,
    //   idField: 'item_id',
    //   textField: 'item_text',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: true
    // };
  }


  // usersaveform=new FormGroup({  
  //   firstName:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    
  //   lastName:new FormControl('' , [Validators.required , Validators.minLength(2) ] ), 
  //   jobTitle:new FormControl('' , [Validators.required , Validators.minLength(5) ] ), 
  //   currentPosition:new FormControl('' , [Validators.required , Validators.minLength(5) ] ), 
  //   previousOrganization:new FormControl(), 
  //   experience:new FormControl(), 
  //   skills:new FormControl(), 
  //   photos:new FormControl() , 
  //   resume:new FormControl()  
  // });  
  onSubmit() {
    this.submitted = true;
    this.save();    
   }
  public registerNow(){
    let resp=this.userservice.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
      }
   save1() {
  //   //remove this once login page created
  //   // this.client.clientPassword="Default"
    
     this.userservice.createuser(this.user)
       .subscribe(data => console.log(data), error => console.log(error));
     this.user= new User();
  //   // this.gotoList();
   }
   save() {
    
    this.email=this.user.userEmail
     this.userservice.updateUser("Candy@gmail.com", this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    
  }

  // saveUser(saveUser){  
  //   this.user=new User();     
  //   this.user.firstName=this.FirstName.value;  
  //   this.user.lastName=this.LastName.value;  
  //   this.user.password=this.Password.value;
  //   this.user.email=this.Email.value;
  //   this.user.jobTitle=this.JobTitle.value;
  //   this.user.currentPosition=this.CurrentPosition.value;
  //   this.user.experience=this.Experience.value;
  //   this.user.previousOrganization=this.PreviousOrganization.value;
  //   this.user.skills=this.Skills.value;
  //   this.user.photos=this.Photos.value;
  //   this.user.resume=this.Resume.value;
    
    
    
   
  //   this.submitted = true;  
  //   this.save();  
  // }
  // save() {  
  //   this.userservice.createuser(this.user)  
  //     .subscribe(data => console.log(data), error => console.log(error));  
  //   this.user = new User();  
  // }  
  // addStudentForm(){  
  //   this.submitted=false;  
  //   this.usersaveform.reset();  
  // }  

  

  

  // onItemSelect(item: any) {
  //   console.log(item);
  // }
  // onSelectAll(items: any) {
  //   console.log(items);
  // }
}

import { User } from "./../user";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../service/user.service";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-candidate-information",
  templateUrl: "./candidate-information.component.html",
  styleUrls: ["./candidate-information.component.css"],
})
export class CandidateInformationComponent implements OnInit {
  constructor(private userservice: UserService,
               private http:HttpClient
    ) {}
  user: User = new User();
  submitted = false;
  selectedFile: File;
   message: string;

  

  experienceItems = [
    { id: 1, name: "0-2 Years" },
    { id: 2, name: "2-4 Years" },
    { id: 3, name: "4-6 Years" },
    { id: 4, name: "6-8 Years" },
    { id: 5, name: "8-10 Years" },
    { id: 6, name: "Above 10 Years" },
  ];
  exp: string;
  previousOrganization = [
    { id: 1, name: "Mphasis" },
    { id: 2, name: "Tcs" },
    { id: 3, name: "Fedex" },
    { id: 4, name: "Amazon" },
    { id: 5, name: "Oracle" },
  ];
  prevorg: string;

  getprevOrg() {
    this.user.userPreviousOrganisation = this.prevorg;
    window.alert(this.user.userPreviousOrganisation);
  }

  getexpValues() {
    this.user.yearsOfExperience = this.exp;
    window.alert(this.user.yearsOfExperience);
  }
  desiredSkillItems = [
    { id: 1, name: "Python" },
    { id: 2, name: "Node Js" },
    { id: 3, name: "Java" },
    { id: 4, name: "PHP" },
    { id: 5, name: "Django" },
    { id: 6, name: "Angular" },
    { id: 7, name: "Vue" },
    { id: 8, name: "ReactJs" },
  ];
  desiredskillArray: String[];

  getdesiredSkillValues() {
    this.user.userSkills = this.desiredskillArray.toString();
    window.alert(this.user.userSkills);
  }

  ngOnInit(): void {
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    this.updateUserProfile();
    this.onUpload() ;
  }

  updateUserProfile() {
    this.user.userEmail = "sarooshGull1@gmail.com";
    this.userservice.updateUser(this.user.userEmail, this.user).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.user = new User();
  }
  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    console.log(this.selectedFile);
    
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.http.put('http://localhost:8080/mhire//users/sarooshGull1@gmail.com', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }

  

 


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  CreateUsers:any[] = ["Admin","Editor","Candidate"];
  Admins:any[] = ["Admin1","Admin2"];
  Editors:any[] = ["Editor1","Editor2","Editor3","Editor4"];
  Clients:any[] = ["Client1","Client2","Client3","Client4"];
  Candidates:any[] = ["Candidate1","Candidate2","Candidate3","Candidate4"];
  Displayarray:any[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  selectOption(CreatedUser)
  {
        window.alert(CreatedUser+ " has Created");
  }
  ViewUser(ViewUser){
    window.alert(ViewUser)
  }
  ViewOf(typeOfUser){

    if(typeOfUser="Candidate"){this.Displayarray=this.Candidates}
    if(typeOfUser="Admin"){this.Displayarray=this.Admins}
    if(typeOfUser="Editor"){this.Displayarray=this.Editors}
    if(typeOfUser="Client"){this.Displayarray=this.Clients}
    

  }

  profileOf(candidateORClient)
{
  if(candidateORClient=="Candidate")
  this.router.navigate([ '/viewprofile' ])
}

}

import { JobViewComponent } from './job-view/job-view.component';
import { JobViewDetailsComponent } from './job-view-details/job-view-details.component';
import { JobListComponent } from './job-list/job-list.component';
import { CreatejobComponent } from './createjob/createjob.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { DataUrlComponent } from './data-url/data-url.component';
import { ExpComponent } from './exp/exp.component';
import { TechnicalComponent } from './technical/technical.component';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { HomeAppComponent } from './home-app/home-app.component';


import { Routes, RouterModule } from '@angular/router';
import { SignUpUserComponent } from './sign-up-user/sign-up-user.component';
import {LoginUserComponent} from './login-user/login-user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CandidateInformationComponent } from './candidate-information/candidate-information.component';
import { SearchCandidateInfoComponent } from './search-candidate-info/search-candidate-info.component';
import { DisplayCandidateInfoComponent } from './display-candidate-info/display-candidate-info.component';
import { InterviewscheduledComponent } from './interviewscheduled/interviewscheduled.component';
import { CandidateresultdataComponent } from './candidateresultdata/candidateresultdata.component';
import { AdminComponent } from './admin/admin.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { MainHomePageComponent } from './main-home-page/main-home-page.component';
import { InterviewscheduledAdminComponent } from './interviewscheduled-admin/interviewscheduled-admin.component';
import { ViewcandidateAdminComponent } from './viewcandidate-admin/viewcandidate-admin.component';
import { SearchcandidatebyadminComponent } from './searchcandidatebyadmin/searchcandidatebyadmin.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';



export const routes: Routes = [

  { path: 'signup', component:SignUpUserComponent  },
  { path: 'login', component: LoginUserComponent },
  { path: 'login', component:LoginUserComponent  },
  {path: 'home' , component:HomepageComponent},
  {path: 'candidate' ,component:CandidateInformationComponent},
  {path:'search' ,component:SearchCandidateInfoComponent},
  {path:'candidateinfo' ,component:DisplayCandidateInfoComponent},
  {path:'interviewscheduled',component:InterviewscheduledComponent},
  {path:'candidateRes',component:CandidateresultdataComponent},
  {path:'admin',component:AdminComponent},
  {path:'forgot',component:ForgetPasswordComponent},
  {path:'main',component:MainHomePageComponent},
  {path:'scheduledadmin',component:InterviewscheduledAdminComponent},
  {path:'viewCandidatebyadmin',component:ViewcandidateAdminComponent},
  {path:'searchcandidateadmin',component:SearchcandidatebyadminComponent},
  {path:'',component:HomeAppComponent},
  {path:'display-data',component:DisplayDataComponent},
  {path:'sidenavbar',component:SidebarComponent},
  {path:'candi_profile', component:CandidateProfileComponent},
  {path:'display_profile',component:ProfileDisplayComponent},
  {path:'technical',component:TechnicalComponent},
  {path:'expierence',component:ExpComponent},
  {path:'dataurl',component:DataUrlComponent},
  {path:'jobd', component:JobDetailsComponent},
  {path:'createjob',component:CreatejobComponent},
  {path:'job-list',component:JobListComponent},
  { path: 'detailsjob/:jobId', component: JobViewDetailsComponent },
  {path:'updatejob/:jobId',component:JobViewComponent}

  
 
  
 
];

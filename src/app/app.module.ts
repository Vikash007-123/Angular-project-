import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginUserComponent } from './login-user/login-user.component';
import { SignUpUserComponent } from './sign-up-user/sign-up-user.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeAppComponent } from './home-app/home-app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ToastrModule } from 'ngx-toastr';
import {SidebarModule} from 'ng-sidebar';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DisplayDataComponent } from './display-data/display-data.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';
import { TechnicalComponent } from './technical/technical.component';
import { ExpComponent } from './exp/exp.component';
import { DataUrlComponent } from './data-url/data-url.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    SignUpUserComponent,
    HomepageComponent,
    CandidateInformationComponent,
    SearchCandidateInfoComponent,
    DisplayCandidateInfoComponent,
    InterviewscheduledComponent,
    CandidateresultdataComponent,
    AdminComponent,
    ForgetPasswordComponent,
    MainHomePageComponent,
    InterviewscheduledAdminComponent,
    ViewcandidateAdminComponent,
    SearchcandidatebyadminComponent,
    HomeAppComponent,
    DisplayDataComponent,
    SidebarComponent,
    CandidateProfileComponent,
    ProfileDisplayComponent,
    TechnicalComponent,
    ExpComponent,
    DataUrlComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot() ,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,MatInputModule,MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatSidenavModule,
    NgSelectModule,
    FormsModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule
  

  ],
 
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes } from '../../node_modules/@angular/router/index';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [



  {path:"landing",component:LandingpageComponent},

  {path:"coursedetails",component:CoursedetailsComponent},
  {path:"login",component:LoginComponent},
  {path:"",component:LandingpageComponent}
];

import { Routes } from '../../node_modules/@angular/router/index';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';

export const routes: Routes = [



  {path:"",component:LandingpageComponent},

  {path:"coursedetails",component:CoursedetailsComponent},
];

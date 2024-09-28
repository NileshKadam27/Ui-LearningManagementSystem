import { Routes } from '@angular/router';
import { CoursedetailsComponent } from '../pages/coursedetails/coursedetails.component';
import { LandingpageComponent } from '../pages/landingpage/landingpage.component';

export const routes: Routes = [



  {path:"",component:LandingpageComponent},

  {path:"coursedetails",component:CoursedetailsComponent},
];

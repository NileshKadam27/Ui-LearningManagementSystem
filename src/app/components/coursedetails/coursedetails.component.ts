import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProfcourseComponent } from '../../pages/profcourse/profcourse.component';

@Component({
  selector: 'app-coursedetails',
  standalone: true,
  imports: [HeaderComponent,ProfcourseComponent],
  templateUrl: './coursedetails.component.html',
  styleUrl: './coursedetails.component.css'
})
export class CoursedetailsComponent {

}

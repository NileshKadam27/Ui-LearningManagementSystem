import { Component } from '@angular/core';
import { CreatecourseComponent } from './createcourse/createcourse.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';

@Component({
  selector: 'app-profcourse',
  standalone: true,
  imports: [CreatecourseComponent,ViewcourseComponent],
  templateUrl: './profcourse.component.html',
  styleUrl: './profcourse.component.css'
})
export class ProfcourseComponent {

}

import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProfcourseComponent } from '../../pages/profcourse/profcourse.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { ProductserviceService } from '../../services/product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-coursedetails',
  standalone: true,
  imports: [
    HeaderComponent,
    ProfcourseComponent,
    CommonModule,
    FooterComponent,
  ],
  templateUrl: './coursedetails.component.html',
  styleUrl: './coursedetails.component.css',
})
export class CoursedetailsComponent implements OnInit {
  showInfoTab: boolean = true;
  showCiruclamTab: boolean = false;
  showTrainerTab: boolean = false;
  courseId: any;
  courseDetails: any;

  constructor(
    private professorservice: ProfessorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}




  // ngOnChanges(): void {
  //   this.route.queryParams.subscribe((params) => {

  //     this.courseId = params['courseId'];
  //     this.getCourseDetails();

  //   });

  // }



  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.courseId = params['courseId'];
      this.getCourseDetails();

    });
  }

  showTabs(viewTab: any) {
    if (viewTab == '1') {
      this.showInfoTab = true;
      this.showTrainerTab = false;
      this.showCiruclamTab = false;
    } else if (viewTab == '2') {
      this.showInfoTab = false;
      this.showCiruclamTab = true;
      this.showTrainerTab = false;
    } else if (viewTab == '3') {
      this.showInfoTab = false;
      this.showCiruclamTab = false;
      this.showTrainerTab = true;
    }
  }

  getCourseDetails() {
    debugger;
    this.professorservice.getCourse(this.courseId).subscribe((res) => {
      this.courseDetails = res.payload;
    });
  }

  enrollCourse() {
    if (!localStorage.getItem('authtoken')) {
      this.router.navigate(['/login']);
    } else {

let req={
  courseid:this.courseId
}

      this.professorservice.enrollCourse(req).subscribe((res) => {
        if (res) {
          this.router.navigate(['/course'], {
            queryParams: { courseId: this.courseId },
          });
        }
      });
    }
  }
}

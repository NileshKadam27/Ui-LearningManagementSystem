import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HttpClient } from '@angular/common/http';
import { ProfessorService } from '../../services/professor.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  isLogin = false;

  courseList: any;

  role: any = '';
  courseId: any;

  constructor(
    private http: HttpClient,
    private profService: ProfessorService,
    private route: Router,
    private activatedRoute :ActivatedRoute
  ) {}

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe
    (
    params =>
    {
          this.courseId = params[
    'courseId'
    ];


        });

    this.getToken();
    this.profService.getCourses().subscribe((response) => {
      console.log(response);
      this.courseList = response.payload;
    });


    this.role=localStorage.getItem("role");

  }

  getToken() {
    let token = localStorage.getItem('authtoken');
    if (token) {
      this.isLogin = true;
    }
  }

  getCourseDetails(courseId: any) {
    debugger;
    this.role = localStorage.getItem('role');
   
      this.route.navigate(['/viewcourse'], {
        queryParams: { courseId: courseId },
      });
   
  }
}

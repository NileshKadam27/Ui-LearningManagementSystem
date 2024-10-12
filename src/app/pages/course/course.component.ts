import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HttpClient } from '@angular/common/http';
import { ProfessorService } from '../../services/professor.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';
import {  BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip} from 'chart.js';



@Component({
  selector: 'app-course',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FooterComponent, LoaderComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  private chart: any;

  isLogin = false;

  courseList: any;

  role: any = '';
  courseId: any;
  isLoading: boolean = false;

  constructor(
    private http: HttpClient,
    private profService: ProfessorService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.createChart();

    this.role = localStorage.getItem('role');
    this.getToken();
    this.activatedRoute.queryParams.subscribe((params) => {
      this.courseId = params['courseId'];
      if (this.courseId === 'all') {
        this.getAllCourseWithoutLogin();
      } else {
        this.getCoursesByRole();
      }
    });
  }

  getCoursesByRole() {
    this.isLoading = true;
    this.profService.getCourses().subscribe((response) => {
      console.log(response);
      this.courseList = response.payload;
      this.isLoading = false;
    });
  }

  getToken() {
    let token = localStorage.getItem('authtoken');
    if (token) {
      this.isLogin = true;
    }
  }

  getCourseDetails(courseId: any) {
    this.role = localStorage.getItem('role');

    if(this.courseId==='all'){
      this.route.navigate(['/coursedetails'], {
        queryParams: { courseId: courseId },
      });
    }

    else{
    this.route.navigate(['/viewcourse'], {
      queryParams: { courseId: courseId },
    });
  }
  }

  getAllCourseWithoutLogin() {
    this.isLoading = true;

    this.profService.getCourseListWithouLogin().subscribe((res) => {
      this.courseList = res.payload;
      this.isLoading = false;
    });
  }





  createChart() {
    const ctx = document.getElementById('enrollmentChart') as HTMLCanvasElement;

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5'], // X-axis labels
        datasets: [{
          label: 'Enrollments',
          data: [50, 75, 100, 40, 90], // Y-axis data
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}


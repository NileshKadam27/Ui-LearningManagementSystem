import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HttpClient } from '@angular/common/http';
import { ProfessorService } from '../../services/professor.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';
import {
  BarElement,
  BarController,
  CategoryScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';
import { Dashboard, DashboardDetails } from '../../interfaces/Dashboard';

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
  dashboardDetails: DashboardDetails[] = [];
  courseNameList: any;
  studentCountList: any;

  constructor(
    private http: HttpClient,
    private profService: ProfessorService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {

    this.role = localStorage.getItem('role');
    if (this.role === 'ROLE_INSTRUCTOR') {
      this.getDashboardDetails();
    }
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

  getDashboardDetails() {
    debugger
    this.profService.getDashboard().subscribe((res) => {
      this.dashboardDetails = res.payload;
      console.log('das',this.dashboardDetails);
      this.courseNameList = this.dashboardDetails.map((d) => d.courseName);
      this.studentCountList = this.dashboardDetails.map(
        (d) => d.numberStudentEnrolled

      );
      console.log('course' + this.courseNameList);
      console.log('course' + this.studentCountList);

      if(this.studentCountList &&  this.courseNameList){
      this.createChart();
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

    if (this.courseId === 'all') {
      this.route.navigate(['/coursedetails'], {
        queryParams: { courseId: courseId },
      });
    } else {
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
        labels: this.courseNameList,
        datasets: [
          {
            label: 'Students Enrolled',
            data: this.studentCountList,
            backgroundColor: 'rgb(105,105,105)',
            borderColor: 'rgb(105,105,105)',
            borderWidth: 1,
            barThickness:40

          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              autoSkip: false, // Prevent scaling
              maxTicksLimit: 1 // Control the number of ticks
            }
          },


          x: {
            stacked: true,

            ticks: {
              autoSkip: false, // Prevent scaling
              maxTicksLimit: 1 // Control the number of ticks
            }
          },
        },
      },
    });
  }
}

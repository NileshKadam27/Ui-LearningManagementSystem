import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../../services/professor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trendingcourses',
  standalone: true,
  imports: [],
  templateUrl: './trendingcourses.component.html',
  styleUrl: './trendingcourses.component.css'
})
export class TrendingcoursesComponent implements OnInit {
trendingCourses: any;


constructor(private profService:ProfessorService,private route :Router){

}
  ngOnInit(): void {
this.getCourses()  }


getCourses() {

  this.profService.getCourseListWithouLogin().subscribe((res) => {
    this.trendingCourses = res.payload;
    this.trendingCourses=this.trendingCourses.slice(0,4)

  });
}


startLearning(id:any){

  this.route.navigate(['/coursedetails'], {
    queryParams: { courseId: id },
  });
}
}

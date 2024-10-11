import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HttpClient } from '@angular/common/http';
import { ProfessorService } from '../../services/professor.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  isLogin =false;

  courseList:any

  constructor(private http: HttpClient,private profService:ProfessorService,private route:Router){}

  ngOnInit() {

    this.getToken()
    this.profService.getAllCourses().subscribe(response=>{
      console.log(response);
      this.courseList=response
    })


  }


getToken(){
  let token=localStorage.getItem("authtoken")
  if(token){
    this.isLogin=true;
   }
  }


  getourseDetails(){
    debugger
    this.route.navigate(["/mycourse"]);
  }

}

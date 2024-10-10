import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HttpClient } from '@angular/common/http';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  isLogin =false;

  courseList:[]=[]

  constructor(private http: HttpClient,private profService:ProfessorService){}

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

}

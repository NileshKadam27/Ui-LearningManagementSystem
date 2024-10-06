import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseCategory } from '../interfaces/profcourse';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  courseUrl="http://localhost:8080/v1/user/professor/course";

  

  constructor(private httpClient:HttpClient) { }


     postCourseDetails(course : any):Observable<any>{
       let headers = new HttpHeaders({
        "Content-Type":"application/json"
      })
      console.log(course);
      return this.httpClient.post<any>(this.courseUrl+'/register',course,{headers:headers});
     }
 
   
     getAllCourses():Observable<CourseCategory[]>{
      let headers = new HttpHeaders({
        "Content-Type":"application/json"
      })
      return this.httpClient.get<CourseCategory[]>(this.courseUrl+'/mycourse',{headers:headers});  
     }

     updateCourse(course:any,courseId:any,videoId:any):Observable<any>{
      let headers = new HttpHeaders({
        "Content-Type":"application/json"
      })
      return this.httpClient.put<any>(this.courseUrl+courseId+'/video/'+videoId,course,{headers:headers});
     }

    
}

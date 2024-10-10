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

      return this.httpClient.post<any>(this.courseUrl+'/register',course);
     }
 
   
     getAllCourses(){
      let headers = new HttpHeaders({
        "Content-Type":"application/json"
      })
      let response= this.httpClient.get<CourseCategory[]>(this.courseUrl+'/mycourse',{headers:headers});  
      return response;
     }

     updateCourse(courseId:any,videoId:any,course:any):Observable<any>{

      let headers = new HttpHeaders({
        "Content-Type":"application/json"
      })
      return this.httpClient.put<any>(this.courseUrl+'/'+courseId+'/video/'+videoId,course,{headers:headers});
     }

     addVideo(video:any,courseId:any):Observable<any>{
      return this.httpClient.put<any>(this.courseUrl+'/'+courseId+'/video',video);
     }

    
}
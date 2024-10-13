import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseCategory } from '../interfaces/profcourse';
import { Dashboard } from '../interfaces/Dashboard';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  course="http://localhost:8080/v1/course/byid?courseId="
  courseUrl="http://localhost:8080/v1/user/professor/course";
  courseUrlWithId="http://localhost:8080/v1/user/professor/course/mycourse?courseId=";
enrollCourseUrl="http://localhost:8080/v1/user/enroll/course"
getCourseUrl="http://localhost:8080/v1/course/getcourses";
getDashboardUrl="http://localhost:8080/v1/course/dashboard/details"


courseLitWithouLogin="http://localhost:8080/v1/course/details";

  constructor(private httpClient:HttpClient) { }

     postCourseDetails(course : any):Observable<any>{

      return this.httpClient.post<any>(this.courseUrl+'/register',course);
     }


     getAllCourses(courseId:any):Observable<any>{
      let headers = new HttpHeaders({
        "Content-Type":"application/json"
      })
      let response= this.httpClient.get<any>(this.courseUrlWithId + courseId,{headers:headers});
      return response;
     }

     getCourses():Observable<any>{
      let headers = new HttpHeaders({
        "Content-Type":"application/json"
      })
      let response= this.httpClient.get<any>(this.getCourseUrl,{headers:headers});
      return response;
     }



     getCourse(courseId:any):Observable<any>{
      let headers = new HttpHeaders({
        "Content-Type":"application/json"
      })
      let response= this.httpClient.get<any>(this.course + courseId,{headers:headers});
      return response;
     }

     getAllCourseswithId(courseId:any):Observable<any>{
      let headers = new HttpHeaders({
        "Content-Type":"application/json"
      })
      let response= this.httpClient.get<any>(this.courseUrl+'/mycourse',{headers:headers});
      return response;
     }


     updateCourse(courseId:any,videoId:any,course:any):Observable<any>{
      return this.httpClient.put<any>(this.courseUrl+'/'+courseId+'/video/'+videoId,course);
     }

     addVideo(video:any,courseId:any):Observable<any>{
      return this.httpClient.put<any>(this.courseUrl+'/'+courseId+'/video',video);
     }


     enrollCourse(courseId:any):Observable<any>{
      return this.httpClient.post<any>(this.enrollCourseUrl,courseId);



     }

     getCourseListWithouLogin():Observable<any>{
      return this.httpClient.get<any>(this.courseLitWithouLogin);

     }

     getDashboard():Observable<any>{
      return this.httpClient.get(this.getDashboardUrl);

     }

}

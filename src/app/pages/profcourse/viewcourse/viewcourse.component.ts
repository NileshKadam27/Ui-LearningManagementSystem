import { Component } from '@angular/core';
import { CourseCategory } from '../../../interfaces/profcourse';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfessorService } from '../../../services/professor.service';

@Component({
  selector: 'app-viewcourse',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './viewcourse.component.html',
  styleUrl: './viewcourse.component.css'
})
export class ViewcourseComponent {

  ccourses: any[] = []; // Initialize your courses array
  // editCourseForm: FormGroup;
  isEditing: boolean = false; // Flag to control the edit form visibility
  currentCourseDet: any;
  updateModalVisible:boolean=false;

  constructor(private profService:ProfessorService){
   
  }


  courseCategory = new FormControl("",  [Validators.required]);
  courseName = new FormControl("", [Validators.required]);
  courseDescription = new FormControl("", [Validators.required]);
  videoTitle = new FormControl("", [Validators.required]);
  videoDescription = new FormControl("", [Validators.required]);
  videoDuration = new FormControl("", [Validators.required]);
  videoFile = new FormControl("", [Validators.required]);

  courseForm = new FormGroup({
    courseCategory:this.courseCategory,
    courseName:this.courseName,
    courseDescription:this.courseDescription,
    videoTitle:this.videoTitle,
    videoDescription:this.videoDescription,
    videoDuration:this.videoDuration,
    videoFile:this.videoFile,
  })
  courses:CourseCategory[]=[];

  ngOnInit() {
  this.profService.getAllCourses().subscribe((response:any)=>{
      console.log(response);
      this.courses= response;
    })
  }


  hideUpdateModal(event:any)
  { 

    if(event.target?.className==="modal")
    {
      this.updateModalVisible = false
    }
    
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.courseForm.patchValue({ videoFile: file });
  }


    editCourse(courseDetail: any ) {

      console.log(courseDetail);
      
      this.currentCourseDet = courseDetail; // Store the current course detail
      this.courseForm.patchValue({
        
        courseCategory:courseDetail.courseCategory,
        courseName: courseDetail.courseName,
        courseDescription: courseDetail.coursedescription,
        videoTitle: courseDetail.videoBean[0].videoTitle,
        videoDescription: courseDetail.videoBean[0].videoDescription,
        videoDuration: courseDetail.videoBean[0].videoDuration,
      });
      this.isEditing = true; // Show the edit form
      this.updateModalVisible = true
      console.log( this.updateModalVisible);
    }


    // onFileChange(event: any) {
    //   const file = event.target.files[0];
    //   this.courseForm.patchValue({ videoFile: file });
    // }

    updateCourse() {
      console.log("hii");
      if (this.courseForm.valid) {
        const updatedCourse = {
          ...this.currentCourseDet,
          ...this.courseForm.value // Merge form values with current course details
        };

        this.profService.updateCourse(this.currentCourseDet.courseId,this.currentCourseDet.videoId,updatedCourse)
        .subscribe((response)=>{
          console.log(response);
        })
       
      }
      this.updateModalVisible = false


    }


}




import { Component } from '@angular/core';
import { CourseCategory } from '../../../interfaces/profcourse';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfessorService } from '../../../services/professor.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewcourse',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './viewcourse.component.html',
  styleUrl: './viewcourse.component.css'
})
export class ViewcourseComponent {

  ccourses: any[] = []; // Initialize your courses array
  isEditing: boolean = false; // Flag to control the edit form visibility
  currentCourseDet: any;
  updateModalVisible:boolean=false;
  videoForm1: FormGroup;
  courseForm1:FormGroup;
  addVideo:boolean =false;
  courseId :any;
  videoId :any;


  // constructor(private profService:ProfessorService){}


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

  constructor(private fb: FormBuilder, private http: HttpClient,private profService:ProfessorService) {
    this.courseForm1 = this.fb.group({
      Id:['',],
      videoTitle: ['', Validators.required],
      videoDescription: ['', Validators.required],
      videoDuration: [null, [Validators.required, Validators.min(1)]],
      videoFile: [null, Validators.required]
    }),
  
  
    this.videoForm1=this.fb.group({
      videoTitle: ['', Validators.required],
      videoDescription: ['', Validators.required],
      videoDuration: [null, [Validators.required, Validators.min(1)]],
      videoFile: [null, Validators.required]
    })
  }
  courses:CourseCategory[]=[];

  ngOnInit() {
  this.profService.getAllCourses().subscribe((response:any)=>{
      console.log(response);
      this.courses= response;
    })
  }


  hideUpdateModal(event:any)
  { 
    if(event.target?.className==="modal"){
      this.updateModalVisible = false
    }
    
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.courseForm1.patchValue({ videoFile: file });
    this.videoForm1.patchValue({ videoFile: file });
  }



  
    editCourse(courseDet:any,video:any) {

      this.courseId=courseDet.courseId;
      this.videoId=video.videoId;
      this.courseForm1.patchValue({

        videoTitle: video.videoTitle,
        videoDescription:video.videoDescription,
        videoDuration: video.videoDuration,
      });
      this.isEditing = true; // Show the edit form
      this.updateModalVisible = true
      console.log( this.updateModalVisible);
    }



    updateCourse() {       
      const formData = new FormData();
      Object.keys(this.courseForm1.value).forEach(key => {
        formData.append(key, this.courseForm1.value[key]);
      });


          this.profService.updateCourse(this.courseId,this.videoId,formData)
        .subscribe((response)=>{
          console.log(response);
        })
       
      this.updateModalVisible = false
      

    }

    enableVideoDets(Id:any){
      console.log("enableVideoDets");
      this.addVideo =true;

      this.courseId=Id;
      console.log(this.courseId);
        }

    submitVideo(){
        const formData = new FormData();
        Object.keys(this.courseForm.value).forEach(key => {
          formData.append(key, this.videoForm1.value[key]);
        });
      console.log(this.courseId);
        this.profService.addVideo(formData,this.courseId).subscribe((response)=>{
          console.log(response);
          this.addVideo =false
        })


    
      }

}

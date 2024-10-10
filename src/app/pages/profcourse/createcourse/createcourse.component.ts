import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfessorService } from '../../../services/professor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcourse',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './createcourse.component.html',
  styleUrl: './createcourse.component.css'
})
export class CreatecourseComponent {

  courseForm: FormGroup;
  allowSubmit: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient,private profService:ProfessorService,private router:Router) {
    this.courseForm = this.fb.group({
      courseCategory: ['', Validators.required],
      courseName: ['', Validators.required],
      courseDescription: ['', Validators.required],
    });
  }

  
  


  checkFormValidity() {
    this.allowSubmit = this.courseForm.valid;
  }

  
  submitCourse() {
    console.log(this.courseForm.value);
    if (this.allowSubmit) {
      const formData = new FormData();
      console.log(this.courseForm)

      Object.keys(this.courseForm.value).forEach(key => {
        formData.append(key, this.courseForm.value[key]);
      });
      this.profService.postCourseDetails(formData).subscribe((response) => {
        console.log('Course saved!', response);
        this.courseForm.reset();
        this.router.navigate(["/viewcourse"]);

      })
    } else {
      console.error('Form is invalid!');
    }
  }

}
import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserserviceService } from '../../services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  passisActive: boolean = true;

  constructor(private userService:UserserviceService, private router:Router){}

  username = new FormControl("",[
    Validators.required
  ])
  password = new FormControl("",[
    Validators.required
  ])
  email = new FormControl("",[
    Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
  ])
  mobile = new FormControl("",[
    Validators.required
  ])

  roleCode = new FormControl("STUDENT",[
    Validators.required
  ])


  registerForm = new FormGroup({
    username:this.username,
    password:this.password,
    email:this.email,
    mobile:this.mobile,
    roleCode:this.roleCode
  })

  registerUser(){
    if(this.registerForm.status=="VALID")
    {
      this.userService.registerUser(this.registerForm.value).subscribe(response=>{
        if(response.payload.id){
          this.router.navigate(["/login"])
        }
      })
    }

  }

  checkPassword(){
    this.passisActive = !this.passisActive;
  }



}

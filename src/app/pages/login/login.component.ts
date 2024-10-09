import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserserviceService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  passisActive: boolean = true;

  errorMessage="";
  isError=false;

  constructor(private userService:UserserviceService, private router:Router){}

  username = new FormControl("",[
    Validators.required
  ])
  password = new FormControl("",[
    Validators.required
  ])

  loginForm = new FormGroup({
   
    username:this.username,
    password:this.password
  })

  login(){
      if(this.loginForm.valid)
      {
        this.userService.loginUser(this.loginForm.value).subscribe((response:any)=>{

          localStorage.setItem("authtoken",response.payload.token);
          localStorage.setItem("role",response.payload.role);

          if(response.payload.token)
          {
            this.router.navigate(["/landing"])
          }
        },(error) => {
          this.isError=true;
          this.errorMessage=error.error.errorBean.errorMessage
        })
      }
    }

    checkPassword(){
      this.passisActive = !this.passisActive;
    }
  
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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

  constructor(private userService:UserserviceService, private router:Router){}

  username = new FormControl("",[])
  password = new FormControl("",[])

  loginForm = new FormGroup({
   
    username:this.username,
    password:this.password
  })

  login(){
      if(this.loginForm.valid)
      {
        this.userService.loginUser(this.loginForm.value).subscribe((response)=>{
  
          localStorage.setItem("authtoken",response.payload.token);
  
          if(response.payload.role[0].includes("STUDENT"))
          {
            this.router.navigate(["/landing"])
          }
        })
      }
    }
  
}

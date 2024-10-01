import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SearchsectionComponent } from '../../components/searchsection/searchsection.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports:[RouterOutlet,HeaderComponent,FooterComponent,SearchsectionComponent,CommonModule],
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  islogin =false;
  constructor() { }

  ngOnInit() {

this.getToken()
    
  }


getToken(){
  let token=localStorage.getItem("authtoken")
  if(token){
    this.islogin=true;
   }
  }
}

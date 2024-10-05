import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SearchsectionComponent } from '../../components/searchsection/searchsection.component';
import { CommonModule } from '@angular/common';
import { TrendingcoursesComponent } from '../../components/trendingcourses/trendingcourses.component';
import { WhatweofferComponent } from '../../components/whatweoffer/whatweoffer.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';


@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports:[RouterOutlet,HeaderComponent,FooterComponent,SearchsectionComponent,CommonModule,TrendingcoursesComponent,WhatweofferComponent,TestimonialsComponent],
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  isLogin =false;
  constructor() { }

  ngOnInit() {

    this.getToken()

  }


getToken(){
  let token=localStorage.getItem("authtoken")
  if(token){
    this.isLogin=true;
   }
  }
}

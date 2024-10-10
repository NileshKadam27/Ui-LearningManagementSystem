import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductserviceService } from '../../services/product.service';
import { LandingpageComponent } from '../../pages/landingpage/landingpage.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showCategories: boolean = false;
  showCourses: boolean = false;

  @Input() isLogin:boolean=false;
  role:any=''
  constructor(
    private route: Router,
    private productservice: ProductserviceService
  ) {}

  details = [
    {
      category: 'Computer Science',
      courses: [
        {
          id: 101,
          name: 'Introduction to Programming',
        },
        {
          id: 102,
          name: 'Data Structures and Algorithms',
        },
        {
          id: 103,
          name: 'Web Development',
        },
        {
          id: 104,
          name: 'Machine Learning',
        },
      ],
    },
    {
      category: 'Business',
      courses: [
        {
          id: 201,
          name: 'Marketing Fundamentals',
        },
        {
          id: 202,
          name: 'Financial Accounting',
        },
        {
          id: 203,
          name: 'Entrepreneurship',
        },
        {
          id: 204,
          name: 'Business Analytics',
        },
      ],
    },
    {
      category: 'Art and Design',
      courses: [
        {
          id: 301,
          name: 'Graphic Design Basics',
        },
        {
          id: 302,
          name: 'Photography Techniques',
        },
        {
          id: 303,
          name: 'Illustration and Drawing',
        },
        {
          id: 304,
          name: 'User Experience Design',
        },
      ],
    },
    {
      category: 'Health and Wellness',
      courses: [
        {
          id: 401,
          name: 'Nutrition Basics',
        },
        {
          id: 402,
          name: 'Mental Health Awareness',
        },
        {
          id: 403,
          name: 'Yoga for Beginners',
        },
        {
          id: 404,
          name: 'First Aid Certification',
        },
      ],
    },
    {
      category: 'Science',
      courses: [
        {
          id: 501,
          name: 'Introduction to Biology',
        },
        {
          id: 502,
          name: 'Physics for Everyone',
        },
        {
          id: 503,
          name: 'Chemistry Fundamentals',
        },
        {
          id: 504,
          name: 'Environmental Science',
        },
      ],
    },



  ];
  selctedSubcategory: { id: number; name: string }[] | undefined;

  ngOnInit() {
    this.fetchData();
    this.role = localStorage.getItem("role");
  }

  mouseenter() {
    this.showCategories = true;
  }

  onMouseLeave() {
    this.showCategories = false;
  }

  mouseenterForCourse() {
    this.showCourses = true;
  }

  getSubCategory(category: string) {
    this.selctedSubcategory = this.details.find(
      (a) => a.category === category
    )?.courses;
  }

  navigate() {
    this.route.navigate(['/coursedetails']);
  }

  fetchData() {
    this.productservice.getData().subscribe((data) => {});
  }

  login(){
    this.route.navigate(["/login"]);

  }

  register(){
    this.route.navigate(["/register"]);
  }

  logOut(){
    localStorage.setItem("authtoken","");
    this.route.navigate([""])

  }
  mycourse(){
    this.route.navigate(["/mycourse"])
  }

  addCourse(){
    this.route.navigate(["/createcourse"])
  }

  viewCourse(){
    this.route.navigate(["/course"])
  }
}

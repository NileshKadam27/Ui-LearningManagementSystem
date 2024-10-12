import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchsection',
  standalone: true,
  imports:[],
  templateUrl: './searchsection.component.html',
  styleUrls: ['./searchsection.component.css']
})
export class SearchsectionComponent implements OnInit {

  constructor( private route:Router ) { }

  ngOnInit() {
  }



  goToCourseList(){


    this.route.navigate(['/course'], {
      queryParams: { courseId: 'all' },
    });  }
}

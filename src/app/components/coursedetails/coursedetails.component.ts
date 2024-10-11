import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProfcourseComponent } from '../../pages/profcourse/profcourse.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-coursedetails',
  standalone: true,
  imports: [HeaderComponent, ProfcourseComponent, CommonModule,FooterComponent],
  templateUrl: './coursedetails.component.html',
  styleUrl: './coursedetails.component.css',
})
export class CoursedetailsComponent implements OnInit {
  showInfoTab: boolean = true;
  showCiruclamTab: boolean = false;
  showTrainerTab: boolean = false;


ngOnInit(): void {

}


constructor(){

}


  showTabs(viewTab: any) {
    if (viewTab == '1') {
      this.showInfoTab = true;
      this.showTrainerTab = false;
      this.showCiruclamTab = false;
    } else if (viewTab == '2') {
      this.showInfoTab = false;
      this.showCiruclamTab = true;
      this.showTrainerTab = false;
    } else if (viewTab == '3') {
      this.showInfoTab = false;
      this.showCiruclamTab = false;
      this.showTrainerTab = true;
    }
  }
}

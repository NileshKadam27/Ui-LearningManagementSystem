import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { MyCourseDetails } from '../../interfaces/MyCourseDetails';
import { MycourseService } from '../../services/mycourse.service';

@Component({
  selector: 'app-mycourse',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './mycourse.component.html',
  styleUrl: './mycourse.component.css'
})
export class MycourseComponent implements OnInit {

  mycoursedetail:MyCourseDetails[] = []

  constructor(private myCourseService:MycourseService){
  }
  
  ngOnInit(): void {
    this.myCourseService.getMyCourse().subscribe((res)=>{
      this.mycoursedetail = res
    })
  }
}

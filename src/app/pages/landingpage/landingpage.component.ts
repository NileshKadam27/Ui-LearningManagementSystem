import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SearchsectionComponent } from '../../components/searchsection/searchsection.component';


@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports:[RouterOutlet,HeaderComponent,FooterComponent,SearchsectionComponent],
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

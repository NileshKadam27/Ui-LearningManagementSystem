import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LandingpageComponent } from "./pages/landingpage/landingpage.component";
import { LoaderComponent } from "./components/loader/loader.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LandingpageComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learningmanagementsystem';
}

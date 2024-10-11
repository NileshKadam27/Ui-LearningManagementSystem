import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  currentIndex = 0;


  testimonials:any=[

    {

      review:"The course was extremely helpful, was able to pack a lot of information into 2 days, and was easy to follow"
    },
    {

      review:"The course was exffsdfftremely helpful, was able to pack a lot of information into 2 days, and was easy to follow"
    } , {

      review:"The course was extrem2343242ely helpful, was able to pack a lot of information into 2 days, and was easy to follow"
    }
  ]




  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}





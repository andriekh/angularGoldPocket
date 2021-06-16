import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carouselDatas = [
    {
      path: '../../../assets/carousel-1.png',
      class: 'carousel-item active',
      headerTitle: "Gold Investment",
      description: "Invest Your Asset And Wealth in Gold"
    },
    {
      path: '../../../assets/carousel-2.png',
      class: 'carousel-item',
      headerTitle: "Second Slide",
      description: "Some representative placeholder content for the first slide."
    },
    {
      path: '../../../assets/carousel-3.png',
      class: 'carousel-item',
      headerTitle: "Third Slide",
      description: "Some representative placeholder content for the first slide."
    }

  ]


  constructor() { }

  ngOnInit(): void {
  }

}

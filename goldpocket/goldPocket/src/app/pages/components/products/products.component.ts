import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  cardDatas = [
    {
      productName: "Platinum",
      path: '../../../assets/1.png'
    },
    {
      productName: "Gold",
      path: '../../../assets/2.png'
    },
    {
      productName: "Silver",
      path: '../../../assets/3.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

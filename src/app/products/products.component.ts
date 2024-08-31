import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    products=[
      {
        id:1,
        name:'Watch',
        price:'5000',
        color:'Gold',
        available:'Available',
        image:'/assets/watch.jpg'
      },
      {
        id:2,
        name:'Iphone',
        price:'2100',
        color:'Silver',
        available:'Available',
        image:'/assets/iphone.jpg'
      },
      {
        id:3,
        name:'TV',
        price:'1200',
        color:'Black',
        available:'Not Available',
        image:'/assets/tv.jpg'
      },
      {
        id:4,
        name:'Washing machine',
        price:'800',
        color:'White',
        available:'Available',
        image:'/assets/machine_y.jpg'
      },
    ]
}

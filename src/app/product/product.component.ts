import { Component } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
   title = 'Samsung Galaxy Book 3 Pro 360'
   descriptions = ['Windows 11 Home', '16.0" WQXGA+ AMOLED', 'Intel® Core™ i7-1360P', '16GB RAM', 'EVO certification', '65W Charger',];
   price = 1500;
   stock = 10;
  //  photo = './assets/galaxy-book.png';
}

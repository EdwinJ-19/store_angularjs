import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Product } from './productlist/product';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
// import { FormsModule } from '@angular/forms';
// import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductlistComponent, NavbarComponent, FooterComponent, FontAwesomeModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store';
  // faRightToBracket = faRightToBracket;


  constructor(private dataService: DataService){
    console.log(this.dataService);
  }
  // product : Product[] = [
  //   {
  //     id:1,
  //     name:"Samsung S24",
  //     description:"lorem Ipsum",
  //     price:74999,
  //     category:"Mobile Electronics",
  //     stock: "In Stock",
  //     image: "https://ss7.vzw.com/is/image/VerizonWireless/samsung-eureka-e1-amberyellow?wid=465&hei=465&fmt=webp",
  //   },
  //   {
  //     id:2,
  //     name:"IPhone 15 Pro Max",
  //     description:"lorem Ipsum",
  //     price:154000,
  //     category:"Mobile Electronics",
  //     stock: "In Stock",
  //     image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png",
  //   },
  //   {
  //     id:3,
  //     name:"Redmi Note 13 Pro",
  //     description:"lorem Ipsum",
  //     price:21340,
  //     category:"Mobile Electronics",
  //     stock: "Not In Stock",
  //     image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-pro-5g-1.jpg",
  //   },
  //   {
  //     id:4,
  //     name:"CMF Phone 1",
  //     description:"lorem Ipsum",
  //     price:17999,
  //     category:"Mobile Electronics",
  //     stock: "Not In Stock",
  //     image: "https://us.nothing.tech/cdn/shop/files/2048x1352BuyPage-OrangePhone-1_e763c3ed-76c7-42e7-88f3-402f237eb16f_800x.png?v=1720092892",
  //   },
  //   {
  //     id:5,
  //     name:"OnePlus 12",
  //     description:"lorem Ipsum",
  //     price:64999,
  //     category:"Mobile Electronics",
  //     stock: "In Stock",
  //     image: "https://www.androidheadlines.com/wp-content/uploads/2023/12/OnePlus-12-hands-on-image-official-1-jpg.webp",
  //   },]
}

import { Component } from '@angular/core';
import { Product } from './product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  searchFilter = ""

  product : Product[] = [
    {
      id:1,
      name:"Samsung S24",
      description:"lorem Ipsum",
      price:74999,
      category:"Mobile Electronics",
      stock: "In Stock",
      image: "https://ss7.vzw.com/is/image/VerizonWireless/samsung-eureka-e1-amberyellow?wid=465&hei=465&fmt=webp",
    },
    {
      id:2,
      name:"IPhone 15 Pro Max",
      description:"lorem Ipsum",
      price:154000,
      category:"Mobile Electronics",
      stock: "In Stock",
      image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png",
    },
    {
      id:3,
      name:"Redmi Note 13 Pro",
      description:"lorem Ipsum",
      price:21340,
      category:"Mobile Electronics",
      stock: "Not In Stock",
      image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-13-pro-5g-1.jpg",
    },
    {
      id:4,
      name:"CMF Phone 1",
      description:"lorem Ipsum",
      price:17999,
      category:"Mobile Electronics",
      stock: "Not In Stock",
      image: "https://us.nothing.tech/cdn/shop/files/2048x1352BuyPage-OrangePhone-1_e763c3ed-76c7-42e7-88f3-402f237eb16f_800x.png?v=1720092892",
    },
    {
      id:5,
      name:"OnePlus 12",
      description:"lorem Ipsum",
      price:64999,
      category:"Mobile Electronics",
      stock: "In Stock",
      image: "https://www.androidheadlines.com/wp-content/uploads/2023/12/OnePlus-12-hands-on-image-official-1-jpg.webp",
    },
  ]

  giveProductPriceColor(price:number){
    if(price>70000){
      return true
    }else{
      return false
    }
  }

  giveProductStockColor(stock:string){
    if(stock == "In Stock"){
      return 'black'
    }else{
      return 'red'
    }
  }


}

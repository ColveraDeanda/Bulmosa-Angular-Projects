import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  public products: Product[] = [
    {
      id: 1,
      name: 'The Catalyzer',
      price: 16,
      image: 'https://img.buzzfeed.com/store-an-image-prod-us-east-1/M1bJPvLo2.png?output-format=jpg'
    },
    {
      id: 2,
      name: 'Shooting Stars',
      price: 21.15,
      image: 'https://assets2.razerzone.com/images/og-image/Razer-Products-OGimage-1200x630.jpg'
    },
    {
      id: 3,
      name: 'Neptune',
      price: 12,
      image: 'https://www.digitaltrends.com/wp-content/uploads/2022/03/alienware-34-9.jpg?resize=650%2C390&p=1'
    },
    {
      id: 4,
      name: 'The 400 Blows',
      price: 18.40,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86fi-aqetLmfcM0We4Lney41qxjT5N1IQ006fmnGAC94jFqrrrF_oqomqK8fdedmYqwk&usqp=CAU'
    },
    {
      id: 5,
      name: 'The Catalyzer',
      price: 16,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHMzzOT42t1loriQM5tn-KHld9PhZFAi38A&usqp=CAU'
    },
    {
      id: 6,
      name: 'Shooting Stars',
      price: 21.15,
      image: 'https://ahkr.b-cdn.net/wp-content/uploads/2022/01/astro-gaming-homepage-1024x466.png'
    },
    {
      id: 7,
      name: 'Neptune',
      price: 12,
      image: 'https://xxboxnews.blob.core.windows.net/prod/sites/2/2022/10/Rockstar_Doritos_Xbox-Wire-Post_4-6dc51ec9c56399032bcd.jpg'
    },
    {
      id: 8,
      name: 'The 400 Blows',
      price: 18.40,
      image: 'https://cdn.originpc.com/img/products/gaming-desktops.jpg'
    },
  ]

}

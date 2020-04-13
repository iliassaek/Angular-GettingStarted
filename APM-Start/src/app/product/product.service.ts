import { IProduct } from './product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn : 'root'
})
export class ProductService {
    getProducts():IProduct[]{
        return [
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2019",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "assets/images/hammer.png"
              },
              {
                "productId": 8,
                "productName": "Saw",
                "productCode": "TBX-0022",
                "releaseDate": "May 15, 2019",
                "description": "15-inch steel blade hand saw",
                "price": 11.55,
                "starRating": 3.7,
                "imageUrl": "assets/images/saw.png"
              }

        ]
    }
}
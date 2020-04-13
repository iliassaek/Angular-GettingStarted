import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products' ,
    templateUrl:'./product-list.component.html' ,
    styleUrls : ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    pageTitle : String = "Product List !";
    imageWidth: number = 50;
    imageMargin : number = 2 ;
    showImage: boolean = true ;

    private _listFilter: string ;
    filteredProduct : IProduct[] ;
    

    constructor(private productService : ProductService ) {
    }

    products  : IProduct[] ;

      public get listFilter(): string {
        return this._listFilter;
      }


      public set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProduct = this.listFilter ? this.performFilter(this.listFilter) : this.products;
      }


      ngOnInit(): void {
        console.log("In OnInit Method") ;
        this.products = this.productService.getProducts() ;
        this.filteredProduct = this.products;
      }

      toggleImage():void {
        this.showImage = !this.showImage ;
      }

      performFilter(filterBy : string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(
          (product:IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
        );
      }

      onRatingClicked(message: string): void {
        this.pageTitle = 'Product List :' + message ;
      }
}
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit, OnDestroy {

  public selectedProduct;
  public printColor;
  public printStorage;
  public validatorMsg = "Hi, there";
  public selectedColor;
  public selectedStorage;
  private getCartCount;
  private subHandler$;
  
  constructor(private service: SharedService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(proDetail => {
      this.getSelectedProduct(proDetail.productID)

      if (this.service.cartsInfo.indexOf(parseInt(proDetail.productID)) > -1) {
        this.validatorMsg = "This product is already added in cart";
      }

    })
    this.subHandler$ = this.service.cartobser$.subscribe(res => {
      this.getCartCount = res;
    })
  }

  ngOnDestroy() {
    this.subHandler$.unsubscribe();
    console.log(this.service.cartobser$);
  }

  getSelectedProduct(productID) {
    let prodcutConfig = this.service.productListData;
    let selectedObj;
    let getStorageOfProduct = [];
    let getColorOfProduct = [];
    for (let i = 0; i < prodcutConfig.length; i++) {
      if (prodcutConfig[i]["pid"] == productID) {
        selectedObj = prodcutConfig[i];
        this.selectedStorage = prodcutConfig[i]['varient'];
        this.selectedColor = prodcutConfig[i]['productListColor'];

      }

      if (getStorageOfProduct.indexOf(prodcutConfig[i]['varient']) == -1) {
        getStorageOfProduct.push(prodcutConfig[i]['varient'])
      }

      if (getColorOfProduct.indexOf(prodcutConfig[i]['productListColor']) == -1) {
        getColorOfProduct.push(prodcutConfig[i]['productListColor'])
      }
    }
    this.validatorMsg = "Available";
    this.printColor = getColorOfProduct;
    this.printStorage = getStorageOfProduct;
    this.selectedProduct = selectedObj;
  }

  loadSelectedColorProduct(productColor: string) {
    let prodcutConfig = this.service.productListData;
    this.selectedColor = productColor;
    for (let i = 0; i < prodcutConfig.length; i++) {
      if (prodcutConfig[i]["productListColor"] == productColor) {
        this.selectedProduct = prodcutConfig[i];
        break;
      }
    }
  }

  loadSelectedStorageProduct(productStorage: string) {
    let prodcutConfig = this.service.productListData;
    this.selectedStorage = productStorage;
    let storageFlag = false;
    for (let i = 0; i < prodcutConfig.length; i++) {
      if (prodcutConfig[i]["varient"] == productStorage && prodcutConfig[i]["productListColor"] == this.selectedColor) {
        this.selectedProduct = prodcutConfig[i];
        storageFlag = true;
        break;
      }
    }
    if (!storageFlag) {
      this.validatorMsg = "Product Not Available...";
    } else {
      this.validatorMsg = "Available";
    }
  }

  addCart(id: any) {
    if (this.service.cartsInfo.indexOf(id) == -1) {

      if (this.getCartCount)
        this.service.manageCartInfo(this.getCartCount + 1)
      else
        this.service.manageCartInfo(1)

      this.validatorMsg = "This product is already added in cart";
      this.service.cartsInfo.push(id);
      console.log(this.service.cartsInfo)
    }
  }


}

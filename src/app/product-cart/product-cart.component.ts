import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  public listOfCartProducts = [];
  public validatorMsg = "Hi, there";

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    let selectedCartIds = this.service.cartsInfo;
    let totalProductItem = this.service.productListData;

    for (let ids of totalProductItem) {
      if (selectedCartIds.indexOf(ids.pid) > -1) {
        this.listOfCartProducts.push(ids)
      }
    }

  }

}

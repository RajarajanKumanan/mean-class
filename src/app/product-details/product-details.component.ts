import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product_name: string;
  public listOfProducts;

  constructor(private route: ActivatedRoute, private service: SharedService) { }

  ngOnInit(): void {
    this.route.params.subscribe(name => {
      console.log(name)
      this.product_name = name.productName;
    })
    this.listOfProducts = this.service.productListData;
  }

}

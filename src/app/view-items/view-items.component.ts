import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.scss']
})
export class ViewItemsComponent implements OnInit {

  @Input() ordername;
  public loadProducts;

  constructor(private orderDetails: SharedService) { }

  ngOnInit(): void {
    this.loadProducts = this.orderDetails.viewItemsConfig[this.ordername];
  }

}

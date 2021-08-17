import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public cartCount = 0;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.service.cartobser$.subscribe(res => {
      if (res) {
        this.cartCount = res;
      }
    })
  }

}

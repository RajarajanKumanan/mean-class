import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  mainMenus = [];

  constructor() { }

  ngOnInit(): void {
    this.mainMenus = [
      {
        menuImage: "assets/offer-img.png",
        menuName: "Top Offers"
      }, {
        menuImage: "assets/mobile.png",
        menuName: "Mobile"
      }, {
        menuImage: "assets/grocery.png",
        menuName: "Grocery"
      }, {
        menuImage: "assets/offer-img.png",
        menuName: "Top Offers"
      }, {
        menuImage: "assets/offer-img.png",
        menuName: "Top Offers"
      }, {
        menuImage: "assets/offer-img.png",
        menuName: "Top Offers"
      }, {
        menuImage: "assets/offer-img.png",
        menuName: "Top Offers"
      }, {
        menuImage: "assets/offer-img.png",
        menuName: "Top Offers"
      }, {
        menuImage: "assets/offer-img.png",
        menuName: "Top Offers"
      }
    ]
  }

}

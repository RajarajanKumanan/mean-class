import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private cartSub = new BehaviorSubject<number>(0);
  public cartobser$ = this.cartSub.asObservable();
  public cartsInfo = [];
  private baseURL = "http://localhost:8000/"

  public viewItemsConfig = {
    discount: [],
    suggested: []
  }

  public productListData = [];

  constructor(private http: HttpClient) {
    this.configInit()
  }

  manageCartInfo(count: number) {
    this.cartSub.next(count);
  }

  configInit() {

    this.http.get(this.baseURL + "flipkartJson/discount").subscribe(val => {
      if (val) {
        console.log(val);
        let response: any = val;
        this.viewItemsConfig.discount = response;
      }
    })

  }


}

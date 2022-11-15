import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ICurrency} from "../../models/currency";
import {ExchangeRateService} from "../../services/exchange-rate.service";




@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  // currencys = new Array<ICurrency>();
  testq = '3'
  @Input() currencys: ICurrency[]
  @Input() currtest: string

  // ngOnInit() {
  //   this.testq = this.test
  //   // console.log('ngOnInit',this.currencys)
  //   // this.currencys = currencys
  //
  // }
  // ngAfterViewInit(){
  //   console.log('ngAfterViewInit',this.currencys)
  // }

  // constructor(private exchangeRateService: ExchangeRateService) {
  // }


}

// import {Component, Input} from "@angular/core";
//
// @Component({
//   selector: 'header-component',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
//
// export class HeaderComponent {
//   @Input() currtest: string[]
// }

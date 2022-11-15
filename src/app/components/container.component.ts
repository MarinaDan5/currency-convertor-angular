import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ICurrency} from "../models/currency";
import {ExchangeRateService} from "../services/exchange-rate.service";



@Component({
  selector: 'container-component',
  templateUrl: './container.component.html',
  // styleUrls: ['./header.component.css']
})

export class ContainerComponent implements OnInit{
  currencys = new Array<ICurrency>();
  currencysAll = new Array<ICurrency>();

  constructor(private exchangeRateService: ExchangeRateService) {
  }

  ngOnInit() {
    this.exchangeRateService.getRateEurUsd().subscribe(res => {
      this.currencys = res.map(item => {
        let currency: ICurrency = {
          sale: item.sale,
          ccy: item.ccy,
          buy: item.buy,
          base_ccy: item.base_ccy
        };

        return currency;
      })
    })
    this.exchangeRateService.getRateAll().subscribe(res => {
      this.currencysAll = res.map(item => {
        let currency: ICurrency = {
          sale: item.sale,
          ccy: item.ccy,
          buy: item.buy,
          base_ccy: item.base_ccy
        };
        return currency;
      })
    })
    let uah: ICurrency = { ccy: "UAH", base_ccy: "UAH", buy: "1", sale: "1" };

    this.currencysAll.unshift(uah);
  }
}


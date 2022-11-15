import { Component, Input } from '@angular/core';
import {ICurrency} from "../../models/currency";


@Component({
  selector: 'body-component',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  text: string = "";
  price: number = 0;
  title = 'angular-currency';

  currentFromName = '';
  currentToName = '';

  rateFrom = 0;
  rateTo = 0;

  currentFromValue = 0;
  currentToValue = 0;




  @Input() currencys: ICurrency[]

  onSelectedFrom(value: string): void {
    this.currentFromName = value;
    this.rateFrom = Number(this.currencys[this.currencys.findIndex(i => i.ccy === value)].sale);
    this.currentToValue = (this.rateFrom/this.rateTo) * this.currentFromValue
    console.log('onSelectedFrom',this.currentToValue, this.currencys[this.currencys.findIndex(i => i.ccy === value)].sale)
  }
  onSelectedTo(value: string): void {
    this.currentToName = value;
    this.rateTo = Number(this.currencys[this.currencys.findIndex(i => i.ccy === value)].sale);
    this.currentFromValue = (this.rateTo/this.rateFrom) * this.currentToValue;
    console.log('onSelectedTo',this.currentFromValue, this.currencys[this.currencys.findIndex(i => i.ccy === value)].sale)
  }

  onChangeFrom(e: Event): void{
    let target = e.target as HTMLInputElement;
    console.log('onChangeFrom', Number(target.value) * this.rateTo)
    this.currentToValue = Number(target.value) * (this.rateFrom/this.rateTo);
  }

  onChangeTo(e: Event): void{
    let target = e.target as HTMLInputElement;
    console.log('onChangeTo',target.value)
    this.currentFromValue = Number(target.value) * (this.rateTo/this.rateFrom);
  }

}

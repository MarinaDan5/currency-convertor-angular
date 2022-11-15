import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ICurrency} from "../models/currency";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ExchangeRateService {

  private url_eur_usd: string = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
  private url_all: string = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=4';

  constructor(private httpClient: HttpClient) { }

  public getRateEurUsd(): Observable<ICurrency[]>{
    return this.httpClient.get<ICurrency[]>(this.url_eur_usd);
  }
  public getRateAll(): Observable<ICurrency[]>{
    return this.httpClient.get<ICurrency[]>(this.url_all);
  }
}

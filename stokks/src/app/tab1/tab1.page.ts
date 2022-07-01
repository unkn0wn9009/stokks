import {Component, OnInit} from '@angular/core';
import {ApiClient, DefaultApi} from 'finnhub';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}

  ngOnInit(): void {

   /* const api_key = ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "sandbox_caumd5aad3ibefjvrtog" // Replace this
    const finnhubClient = new DefaultApi()

// Stock candles
    finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, (error, data, response) => {
      console.log(data)
    });*/
  }

}

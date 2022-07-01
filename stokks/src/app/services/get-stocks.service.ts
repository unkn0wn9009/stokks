import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NavController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GetStocksService {
  stocks: Observable<any>;

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
  ) {
    this.stocks = this.http.get('https://swapi.co/api/films', {});
    this.stocks
      .subscribe(data => {
        console.log('my data: ', data);
      });
  }
}

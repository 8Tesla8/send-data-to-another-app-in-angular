import { Component } from '@angular/core';
import { AppCookieService } from './services/app.cookie.service';
import { AppQueryParameterService } from './services/app.url-query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public paramValue = "";
  public cookieValue = "";

  constructor(
    private _queryParameterService: AppQueryParameterService,
    private _cookieService :AppCookieService
  ){ }


  public addQueryParameter():void{
    this._queryParameterService.addQueryParameter(this.paramValue);
  }

  public getQueryParams():void{
    let param = this._queryParameterService.getQueryParameter();
    console.log(param);
  }


  public addCookie():void{
    this._cookieService.save(this.cookieValue);
  }

  public getCookie():void{
    let val = this._cookieService.get();
    console.log(val);
  }

  public deleteCookie():void{
    this._cookieService.delete();
  }
}

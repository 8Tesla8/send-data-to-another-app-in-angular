import { Component } from '@angular/core';
import { AppCookieService } from './services/app.cookie.service';
import { AppJsQueryParameterService } from './services/app.js-url-query.service';
import { AppQueryParameterService } from './services/app.url-query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public queryParamValue = "";
  public queryParamValueFromService = "";

  public cookieValue = "";
  public cookieValueFromService = "";


  constructor(
    private _queryParameterService: AppQueryParameterService,
    private _cookieService :AppCookieService,
    private _jsQueryParameterService:AppJsQueryParameterService
  ){ 
    var params = this._jsQueryParameterService.getQueryParameters();
    console.log(params);
  }


  public addQueryParameter():void{
    this._queryParameterService.addQueryParameter(this.queryParamValue);
  }

  public getQueryParams():void{
    let val = this._queryParameterService.getQueryParameter();

    if(val){
      this.queryParamValueFromService = val;
    }
    else {
      this.queryParamValueFromService = 'undefined';
    }
  }


  public addCookie():void{
    this._cookieService.save(this.cookieValue);
  }

  public getCookie():void{
    let val = this._cookieService.get();

    if(val){
      this.cookieValueFromService = val;
    }
    else {
      this.cookieValueFromService = 'undefined';
    }

  }

  public deleteCookie():void{
    this._cookieService.delete();
  }
}

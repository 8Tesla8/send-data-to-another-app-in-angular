import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AppCookieService {

    public key: string ='key-for-data-in-cookies';

    constructor(
        private readonly _cookieService: CookieService) {
    }

    public save(text:string):void{
        return this._cookieService.set(this.key,text);
    }

    public get():string|undefined{
        if(this._cookieService.check(this.key)){
            return this._cookieService.get(this.key);
        }

        return undefined
    }

    public delete():void{
        if(this._cookieService.check(this.key)){
            return this._cookieService.delete(this.key);
        }
    }
}
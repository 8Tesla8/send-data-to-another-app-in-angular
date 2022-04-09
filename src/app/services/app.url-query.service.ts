import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class AppQueryParameterService {
    private _queryParamKey = 'queryParamKey';

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
      ){}

    public addQueryParameter(paramValue:string):void{
        let obj = new Object() as any;
        obj[this._queryParamKey] = paramValue;

        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: obj,
            queryParamsHandling: 'merge',  // preserve the existing query params in the route
            skipLocationChange: false       // do not trigger navigation
          });
    }

    public getQueryParameter():string{
        let paramValue = this._route.snapshot.queryParams[this._queryParamKey];
        return paramValue;
    }

}
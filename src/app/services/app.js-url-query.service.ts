export class AppJsQueryParameterService{

    private parametersForRequest:QueryParameter[] = [];
    private parametersFromUrl:QueryParameter[] = [];


    constructor() {
        this.getQueryParameters();
    }


    private languageQueryParam ="lang";

    public addLanguageParameter(langIdentifier:string): void {
        this.parametersForRequest.push(new QueryParameter(this.languageQueryParam,langIdentifier));
    }

    public openUrlWithParameters(url:string): void{
        let queryParametersStr = this.transformParametersInQueryParameters();

        this.parametersForRequest = [];

        window.open(`${url}?${queryParametersStr}`, '_self');
    }

    private transformParametersInQueryParameters():string{
        const queryParametersArr:string[]= [];

        this.parametersForRequest.forEach(p => {
            queryParametersArr.push(encodeURIComponent(p.key) + '=' + encodeURIComponent(p.value));
        });

        return queryParametersArr.join('&');
    }


    private getQueryParameters():void{
        const urlParams = new URLSearchParams(window.location.search);

        const langValue = urlParams.get(this.languageQueryParam);
        if(langValue){
            this.parametersFromUrl.push(new QueryParameter(this.languageQueryParam, langValue));
        }
    }
}


export class QueryParameter{
    key: string;
    value: string;

    constructor(key:string, value:string) {
        this.key = key;
        this.value = value;        
    }
}
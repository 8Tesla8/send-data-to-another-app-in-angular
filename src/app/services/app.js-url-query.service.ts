export class AppJsQueryParameterService{

    public getQueryParameters():QueryParameter[]{
        const urlParams = new URLSearchParams(window.location.search);

        let queryParams :QueryParameter[] = [];
 
        for (const key of (urlParams as any).keys()) {
            var value = urlParams.get(key) as string;
            queryParams.push(new QueryParameter(key, value));
        }

        return queryParams;
    }


    public openUrlWithParameters(url:string, params: QueryParameter[]): void{
        let queryParametersStr = this.transformParametersInQueryParameters(params);
        window.open(`${url}?${queryParametersStr}`, '_self');
    }


    private transformParametersInQueryParameters(params: QueryParameter[]):string{
        const queryParametersArr:string[]= [];

        params.forEach(p => {
            queryParametersArr.push(encodeURIComponent(p.key) + '=' + encodeURIComponent(p.value));
        });

        return queryParametersArr.join('&');
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
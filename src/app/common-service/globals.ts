import { Config } from "../../assets/Config.js";

export default class Globals {
    public static accessToken: string;
    public static softLevel: number;
        
    //private  ;//  "https://localhost:44375/api/" ;// "http://127.0.0.1/api/";
    private static _apiServer =  Config.httpApi;   // ""http://192.168.255.170:8088/"; //  "http://127.0.0.1/";  25.0.0.3    ; 172.16.2.1


    // static get api(){
    //     return this._apiUrl;
    // }
    static get urlServer(){
        return this._apiServer;
    }
    // static get baseApiUrl(){
    //     return this._baseApiUrl;
    // }



    static get UrlAuth(){
        return "api/Auth/";
    }

    static get UrlCustomer(){
        return "api/Customer/";
    }    
   constructor(){
   }
}
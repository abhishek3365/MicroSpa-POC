import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ItemsService {

    constructor( private httpClient : HttpClient ){

    }

}
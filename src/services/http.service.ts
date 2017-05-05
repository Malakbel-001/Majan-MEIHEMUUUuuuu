import { Injectable } from '@angular/core';
import { URLSearchParams, RequestOptions, Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Room } from '../models/room';
import { Player } from '../models/player';
import { Template } from '../models/template';
import { Tile } from '../models/tile';

@Injectable()
export class HttpService {
    constructor(private http: Http) { }

    private authUser = "wm.aarts@student.avans.nl"
    private authToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IndtLmFhcnRzQHN0dWRlbnQuYXZhbnMubmwi.leN2Jto5Xx0itFY-aDregCQzvjrPWnTzzzCkCj8rcSc"

    private serverUrl = 'http://mahjongmayhem.herokuapp.com';  // Server URL

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    // GET METHODS
    getOpenRooms(): Promise<Room[]>{
        // Set state=open as stringquery parameter to the url
        let params: URLSearchParams  = new URLSearchParams();
        params.set('state', 'started');

        let options = new RequestOptions();
        options.search = params;
        return this.doGetRequest('/games', options);
    }
    getRoomTemplates(): Promise<Template[]>{
        return this.doGetRequest('/gameTemplates', null);
    }
    getPlayersByGame(id: String): Promise<Player[]> {
        return this.doGetRequest('/games/' + id + '/players', null);
    }
    getTilesByGame(id: String): Promise<Tile[]> {
        return this.doGetRequest('/games/' + id + '/tiles', null);
    }

    // POST METHODS
    postNewRoom(template: Template, minPlayers: Number, maxPlayers: Number) {
        let options = new RequestOptions();
        options.headers = this.getSecurityHeader();
        
        let body = {
            templateName: template,
            minPlayers: minPlayers,
            maxPlayers: maxPlayers
        }
        return this.doPostRequest('/games', body, options);
    }
    postJoinRoom(roomId: String){
        let options = new RequestOptions();
        options.headers = this.getSecurityHeader();

        return this.doPostRequest('/games/' + roomId + '/players', null, options);
    }

    private getSecurityHeader(): Headers {
        let headers = new Headers();
        headers.append('x-username', this.authUser)
        headers.append('x-token', this.authToken)
        return headers;
    }

    private doGetRequest(url: String, options: RequestOptions){
        console.log("GET: " + url)
        return this.http.get(this.serverUrl + url, options)
               .toPromise()
               .then(response => { return response.json(); })
               .catch(this.handleError);
    }

    private doPostRequest(url: String, body: Object, options: RequestOptions){
        console.log("POST: " + url)
        console.log("Body: ")
        console.log(body);
        console.log(options);
        return this.http.post(this.serverUrl + url, body, options)
               .toPromise()
               .then(response => { return response.json(); })
               .catch(this.handleError);
    }
}
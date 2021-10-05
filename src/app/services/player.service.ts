import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from '../models/player';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    public url = 'https://mach-eight.uc.r.appspot.com/';

    constructor(protected http: HttpClient) {
    }

    getPlayerByHeight(height: number): Observable<any> {
        return this.http.get<Player[]>(this.url);
    }

}

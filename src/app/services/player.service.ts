import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from '../models/player';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    public url = 'https://mach-eight.uc.r.appspot.com/';
    public playersInfo;

    constructor(protected http: HttpClient) {
    }

    getPlayerByHeight(height: number): Observable<any> {
      if (!this.playersInfo) {
        return this.http.get<Player[]>(this.url);
      } else {
        return of(this.playersInfo);
      }
    }

}

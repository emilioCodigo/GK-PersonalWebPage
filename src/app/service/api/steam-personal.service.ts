import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iSteamGameInfo } from '@app/model/steamGame.model';

@Injectable({
  providedIn: 'root',
})
export class SteamPersonalService {
  private rootUrl = 'https://steam-game-own-server.herokuapp.com';
  private url = this.rootUrl + '/own/76561198021631509';
  private gameBaseUrl = this.rootUrl + '/game/';
  constructor(private http: HttpClient) {}
  getMyGames() {
    return this.http.get<iSteamGameInfo[]>(this.url);
  }
  getGameInfo(id: number) {
    return this.http.get<iSteamGameInfo>(`${this.gameBaseUrl}${id}`);
  }
}

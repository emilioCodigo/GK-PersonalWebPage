import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { iSteamGameInfo } from '@app/model/steamGame.model'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class SteamPersonalService {
    private url = 'https://steam-game-own-server.herokuapp.com/own/76561198021631509'
    private gameBaseUrl = 'https://steam-game-own-server.herokuapp.com/game/'
    constructor(private http: HttpClient) {}
    getMyGames() {
        return this.http.get<iSteamGameInfo[]>(this.url)
    }
    getGameInfo(id: string) {
        return this.http.get<iSteamGameInfo>(`${this.gameBaseUrl}${id}`)
    }
}

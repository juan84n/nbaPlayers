import { Component } from '@angular/core';
import { Player } from './models/player';
import { PlayerService } from './services/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nbaProject';

  public players;
  public isLoading = false;

  constructor(public playerService: PlayerService) { }

  public searchHeight(height: number): void {
    if (height) {
      this.isLoading = true;
      this.playerService.getPlayerByHeight(height)
        .subscribe(player => {
          this.isLoading = false;
          if (!this.playerService.playersInfo) {
            this.playerService.playersInfo = player;
          }
          if (player && player.values.length > 0) {
            this.evaluateByMap(player, height);
          }
        });
    }
  }

  evaluateByMap(player: any, height: number): void {
    const mapPlayers = new Map();
    const playersArr: Player[] = player.values;
    this.players = [];
    playersArr.forEach((play, index) => {
      const dif = height - parseInt(play.h_in, 10);
      if (mapPlayers.has(dif)) {
        this.players.push({
          player1: `${play.first_name} ${play.last_name}`,
          player2: `${playersArr[mapPlayers.get(dif)].first_name} ${playersArr[mapPlayers.get(dif)].last_name}`
        });
      }
      mapPlayers.set(parseInt(play.h_in, 10), index);
    });
  }
}

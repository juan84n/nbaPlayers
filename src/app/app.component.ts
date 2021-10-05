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

  public players: Player[] = null;

  constructor(public playerService: PlayerService) { }

  public searchHeight(height: number): void {
    this.playerService.getPlayerByHeight(height)
      .toPromise()
      .then(player => {
        this.players = player.values.filter(play => play.h_in === height);
        console.log(this.players);
      });
  }
}

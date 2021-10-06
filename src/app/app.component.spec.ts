import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PlayerService } from './services/player.service';
import { of } from 'rxjs';
import { JSON_DOCUMENT } from './mock/JSON';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{ provide: PlayerService, useClass: MockPlayerService }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'nbaProject'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('nbaProject');
  });

  it('search sum height', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.componentInstance.searchHeight(139);
    // console.log(fixture.componentInstance.players);
    expect(fixture.componentInstance.players[0].player1).toEqual('Nate Robinson');
    expect(fixture.componentInstance.players[0].player2).toEqual('Brevin Knight');
    expect(fixture.componentInstance.players[1].player1).toEqual('Mike Wilks');
    expect(fixture.componentInstance.players[1].player2).toEqual('Nate Robinson');
  });

  it('search sum without results', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.componentInstance.searchHeight(200);
    console.log(fixture.componentInstance.players);
    expect(fixture.componentInstance.players.length).toEqual(0);

  });
});


export class MockPlayerService {
  getPlayerByHeight = jasmine.createSpy('getPlayerByHeight(height: number)').and.callFake(() => {
    return of(JSON_DOCUMENT);
  });
}

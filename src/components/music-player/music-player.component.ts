import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss'],
  providers: [ApiService]
})
export class MusicPlayerComponent implements OnInit {
  isPlay: boolean = false;

  constructor(
    private apiService : ApiService
  ) {}

  ngOnInit(): void {
   
  }

  public togglePlay() {
    this.isPlay = !this.isPlay;
    const player = document.getElementById('musicPlayerId') as HTMLAudioElement;
    if (this.isPlay) {
      player.play();
    } else {
      player.pause();
    }
  }

}

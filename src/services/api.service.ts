import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class ApiService {
  constructor(
    private http: HttpClient
  ) {}


  getData() {
    return [
      {
        "trackInfo" : "04 - Dawn IV. Stil",
        "trackName" : "Kayhan Kalhor & Rembrandt Frerichs Trio",
        "trackBg" : "kh1_bg",
        "trackCover" : "kh1_Cover",
        "trackId" : "kh1"
      }
    ]

  }


}

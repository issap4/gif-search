import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private gifs = new BehaviorSubject<any[]>([]); //type of Subject that emits a default or last emitted value
  gifs$ = this.gifs.asObservable();

  constructor(private http: HttpClient) { }

  getTrends() {
    this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.APIkey}&limit=50`)
    .subscribe((response: any)=>{
      console.log('Getting Trends!');
      this.gifs.next(response.data);
    });
  }

  searchGifs(gif_name: string){
    this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gif_name}&api_key=${environment.APIkey}&limit=50`)
      .subscribe((response: any)=>{
        console.log(`Great Search! I am searching for ${gif_name} gifs.`);
        this.gifs.next(response.data);
      });
  }
}

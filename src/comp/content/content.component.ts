import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../app/data.service';
import { Subscription } from 'rxjs';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit, OnDestroy{
  gifs: any[] = [];
  private sub!: Subscription

  constructor(private dataService: DataService){
  }

  ngOnInit(): void {
    this.sub = this.dataService.gifs$
      .subscribe((response: any) =>{
        if (response && response.length > 0) {
          this.gifs = response; // Show either trending or searched gifs
        }
      });

    this.dataService.getTrends();
  }

  ngOnDestroy(): void {
    if (this.sub){
      this.sub.unsubscribe(); // Prevent memory leaks
    }
  }
}

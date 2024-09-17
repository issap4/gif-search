import { Component } from '@angular/core';
import { DataService } from '../../app/data.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  constructor (private dataService: DataService) {}

  search(Term: string, event: Event, searchInput: HTMLInputElement) {
    event.preventDefault(); // Prevent the page from reloading
    if (Term && Term.trim()){
      this.dataService.searchGifs(Term);
    }
    // Clear the input field after the search
    searchInput.value = '';
  }
}

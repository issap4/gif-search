import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from "../comp/search/search.component";
import { ContentComponent } from "../comp/content/content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gif';
}

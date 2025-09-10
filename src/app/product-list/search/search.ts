import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
styleUrls: ['./search.css']   // ✅ correct
})
export class Search {
  searchText: string = 'Mens wear';

  updateSearchText(event: any){
    this.searchText = event.target.value
  }

}

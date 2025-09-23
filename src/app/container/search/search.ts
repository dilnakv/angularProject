import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
styleUrls: ['./search.css']   // ✅ correct
})
export class Search {
  searchText: string = '';
  //1. create an event
  @Output() searchTextChanged : EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput') searchInputEl: ElementRef;

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText);
  }

  // updateSearchText(inputEl: HTMLInputElement){
  //   this.searchText = inputEl.value;
  //   this.searchTextChanged.emit(this.searchText)
  // }
  updateSearchText(){
    this.searchText = this.searchInputEl.nativeElement.value
    this.searchTextChanged.emit(this.searchText)
  }
}

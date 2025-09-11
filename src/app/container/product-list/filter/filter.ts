import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.html',
  styleUrl: './filter.css'
})
export class Filter {
  @Input() all: number = 0;
  @Input() inStock: number = 0;
  @Input() outOfStock: number = 0;
  
  selectedFilterRadioButton: string = 'all';

  @Output() selectedRadioButtonChanged = new EventEmitter<string>();
  onSelectedFilterRadioButtonChanged(){
    this.selectedRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }
}

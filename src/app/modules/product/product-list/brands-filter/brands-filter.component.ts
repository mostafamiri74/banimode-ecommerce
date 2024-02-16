import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-brands-filter',
  templateUrl: './brands-filter.component.html',
  styleUrls: ['./brands-filter.component.scss'],
})
export class BrandsFilterComponent {
  @Output() brandSelected = new EventEmitter<string[]>();

  brands: string[] = [
    'Jotijeans',
    'Friuli',
    'Lcman',
    'Indigo',
    'RNS',
    'PierCardin',
  ];
  selectedBrands: string[] = [];
  isReadMore = true;

  constructor() {}

  showMore() {
    this.isReadMore = !this.isReadMore;
  }

  isSelected(brand: string): boolean {
    return this.selectedBrands.includes(brand);
  }

  applyFilters(brand: string): void {
    const index = this.selectedBrands.indexOf(brand);
    if (index === -1) {
      this.selectedBrands.push(brand);
    } else {
      this.selectedBrands.splice(index, 1);
    }

    this.brandSelected.emit(this.selectedBrands);
  }
}

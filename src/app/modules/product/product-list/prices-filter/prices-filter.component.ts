import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-prices-filter',
  templateUrl: './prices-filter.component.html',
  styleUrls: ['./prices-filter.component.scss'],
})
export class PricesFilterComponent {
  @Output() priceRangeSelected = new EventEmitter<{
    minPrice: number;
    maxPrice: number;
  }>();

  minValue: number = 0;
  maxValue: number = 2000000;
  stepValue: number = 10;

  minPrice: number = 0;
  maxPrice!: number;

  constructor() {}

  public applyFilters(): void {
    this.priceRangeSelected.emit({
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
    });
  }
}

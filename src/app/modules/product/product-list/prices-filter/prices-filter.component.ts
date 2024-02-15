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

  minValue = 0;
  maxValue = 2000000;
  stepValue = 10;

  minPrice!: number;
  maxPrice!: number;

  constructor() {}

  applyFilters(): void {
    this.priceRangeSelected.emit({
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
    });

    // const queryParams: { [key: string]: number } = {
    //   minPrice: this.minPrice,
    //   maxPrice: this.maxPrice,
    // };
  }
}

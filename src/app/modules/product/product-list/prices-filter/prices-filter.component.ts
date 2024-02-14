import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-prices-filter',
  templateUrl: './prices-filter.component.html',
  styleUrls: ['./prices-filter.component.scss'],
})
export class PricesFilterComponent {
  minPrice = 0;
  maxPrice = 1000;
  stepValue = 10;

  minValue: number = this.minPrice;
  maxValue: number = this.maxPrice;

  constructor() {}

  applyFilters(): void {
    const queryParams: { [key: string]: number } = {
      minPrice: this.minValue,
      maxPrice: this.maxValue,
    };
  }
}

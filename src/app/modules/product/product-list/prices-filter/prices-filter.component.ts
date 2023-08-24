import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

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
  // selectedPriceRange: [number, number] = [this.minPrice, this.maxPrice];

  constructor(private productService: ProductService) {}

  applyFilters(): void {
    const queryParams: { [key: string]: number } = {
      minPrice: this.minValue,
      maxPrice: this.maxValue,
    };

    this.productService
      .getFilteredProducts(queryParams)
      .subscribe((filteredProducts) => {
        // this.filteredProductsEvent.emit(filteredProducts);
      });
  }
}

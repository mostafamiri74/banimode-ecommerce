import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-brands-filter',
  templateUrl: './brands-filter.component.html',
  styleUrls: ['./brands-filter.component.scss'],
})
export class BrandsFilterComponent {
  @Output() brandSelected = new EventEmitter<string[]>();

  brands: string[] = ['Nike', 'Adidas', 'Puma'];
  selectedBrands: { [key: string]: boolean } = {};

  constructor(private productService: ProductService) {}

  applyFilters(): void {
    const selectedBrandKeys = Object.keys(this.selectedBrands).filter(
      (key: string) => this.selectedBrands[key]
    );
    const queryParams: { [key: string]: string } = {};

    if (selectedBrandKeys.length > 0) {
      queryParams['brand'] = selectedBrandKeys.join(',');
    }

    this.productService
      .getFilteredProducts(queryParams)
      .subscribe((filteredProducts) => {
        // Handle filtered products
      });
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-brands-filter',
  templateUrl: './brands-filter.component.html',
  styleUrls: ['./brands-filter.component.scss'],
})
export class BrandsFilterComponent {
  @Output() brandSelected = new EventEmitter<string[]>();

  brands: string[] = [
    'جوتی جینز',
    'فریولی',
    'ال سی من',
    'ایندیگو',
    'آر ان اس',
    'پیرکاردین',
  ];
  selectedBrands: { [key: string]: boolean } = {};
  isReadMore = true;

  constructor(private productService: ProductService) {}

  showMore() {
    this.isReadMore = !this.isReadMore;
  }

  applyFilters(): void {
    const selectedBrandKeys = Object.keys(this.selectedBrands).filter(
      (key: string) => this.selectedBrands[key]
    );
    const queryParams: { [key: string]: string } = {};

    if (selectedBrandKeys.length > 0) {
      queryParams['brand'] = selectedBrandKeys.join(',');
    }

    this.productService.getFilteredProducts(queryParams).subscribe({
      next: (data) => {
        // this.filteredProductsEvent.emit(filteredProducts);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-categories-filter',
  templateUrl: './categories-filter.component.html',
  styleUrls: ['./categories-filter.component.scss'],
})
export class CategoriesFilterComponent {
  @Output() categorySelected = new EventEmitter<string[]>();

  categories: string[] = ['Clothing', 'Shoes', 'Accessories']; // Replace with actual categories

  selectedCategories: { [key: string]: boolean } = {};

  constructor(private productService: ProductService) {}

  applyFilters(): void {
    const selectedCategoryKeys = Object.keys(this.selectedCategories).filter(
      (key: string) => this.selectedCategories[key]
    );
    const queryParams: { [key: string]: string } = {};

    if (selectedCategoryKeys.length > 0) {
      queryParams['category'] = selectedCategoryKeys.join(',');
    }

    this.productService
      .getFilteredProducts(queryParams)
      .subscribe((filteredProducts) => {
        // Handle filtered products
      });
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-categories-filter',
  templateUrl: './categories-filter.component.html',
  styleUrls: ['./categories-filter.component.scss'],
})
export class CategoriesFilterComponent {
  @Output() categorySelected = new EventEmitter<string[]>();

  categories: string[] = [
    'مردانه',
    'زنانه',
    'نوجوان',
    'آرایشی و بهداشتی',
    'عطر و ادکلن',
    'لوازم خانه',
  ];
  selectedCategories: { [key: string]: boolean } = {};

  isReadMore = true;

  constructor(private productService: ProductService) {}

  showMore() {
    this.isReadMore = !this.isReadMore;
  }
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
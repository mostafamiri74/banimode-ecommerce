import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoriesFilterComponent } from './product-list/categories-filter/categories-filter.component';
import { BrandsFilterComponent } from './product-list/brands-filter/brands-filter.component';
import { PricesFilterComponent } from './product-list/prices-filter/prices-filter.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    CategoriesFilterComponent,
    BrandsFilterComponent,
    PricesFilterComponent,
  ],
  imports: [CommonModule, ProductRoutingModule, SharedModule],
})
export class ProductModule {}

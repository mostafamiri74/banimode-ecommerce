import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  page = 1;

  pageEvent(pageNumber: any): void {
    this.page = pageNumber;
  }
}

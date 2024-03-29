import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBestSillingProduct } from 'src/app/core/models/product.interface';
import { ProductService } from 'src/app/core/services/product.service';
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import SwiperCore from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-home-bestsilling',
  templateUrl: './home-bestsilling.component.html',
  styleUrls: ['./home-bestsilling.component.scss'],
})
export class HomeBestsillingComponent {
  productList$ = new Observable<IBestSillingProduct[]>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.productList$ = this.productService.getBestSillingProduct();
  }
}

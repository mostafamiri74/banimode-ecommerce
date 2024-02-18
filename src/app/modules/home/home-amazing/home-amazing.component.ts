import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { IAmazingProduct } from 'src/app/core/models/product.interface';
import { ProductService } from 'src/app/core/services/product.service';
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import SwiperCore from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-home-amazing',
  templateUrl: './home-amazing.component.html',
  styleUrls: ['./home-amazing.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeAmazingComponent {
  productList$ = new Observable<IAmazingProduct[]>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.productList$ = this.productService.getAmazingProduct();
  }
}

import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { CommentService } from 'src/app/core/services/comment.service';
import { ProductService } from 'src/app/core/services/product.service';
import { ActionTypes, AddToCart } from 'src/app/core/store/actions';
import { ShopState } from 'src/app/core/store/reducer';
// import { AddToCart, RemoveFromCart } from 'src/app/core/store/actions';
import Swiper, {
  A11y,
  Mousewheel,
  Navigation,
  Pagination,
  SwiperOptions,
  Scrollbar,
  Autoplay,
} from 'swiper';
import SwiperCore from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  product$ = new Observable<any>();
  public product!: any;
  inCart = false;

  totalComments: number = 0;
  displayedComments: string[] = [];
  commentsPerLoad = 5;
  currentIndex = 0;
  disableLoadMoreButton = false;

  // @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;
  thumbs: any;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private commentService: CommentService,
    private store: Store<ShopState>
  ) {}

  ngOnInit(): void {
    this.getProductDetails();

    this.getTotalComments();
  }

  private getProductDetails() {
    this.productService.getProductDetails().subscribe((res) => {
      this.product$ = of(res);
      this.product = res;
    });
  }

  public addToCart() {
    this.store.dispatch(AddToCart({ product: this.product }));

    this.inCart = true;
  }

  private getTotalComments() {
    this.commentService.getTotalComments().subscribe((total: number) => {
      this.totalComments = total;
      this.loadMoreComments();
    });
  }

  public loadMoreComments() {
    this.commentService
      .getComments(this.currentIndex, this.commentsPerLoad)
      .subscribe((newComments: string[]) => {
        this.displayedComments = this.displayedComments.concat(newComments);
        this.currentIndex += this.commentsPerLoad;

        if (this.currentIndex >= this.totalComments) {
          this.disableLoadMoreButton = true;
        }
      });
  }

  thumbsSwiper: any;
  setThumbsSwiper([swiper]: any) {
    console.log(swiper);

    this.thumbsSwiper = swiper;
  }
}

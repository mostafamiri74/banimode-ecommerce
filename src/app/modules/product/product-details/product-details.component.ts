import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { CommentService } from 'src/app/core/services/comment.service';
import { ProductService } from 'src/app/core/services/product.service';
import { AddToCart } from 'src/app/core/store/actions';
import { ShopState } from 'src/app/core/store/reducer';
import { GalleryItem, ImageItem, Gallery, GalleryRef } from 'ng-gallery';
import { ActivatedRoute } from '@angular/router';
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import SwiperCore from 'swiper';
import { selectExistInCart } from 'src/app/core/store/selector';
import {
  IBestSillingProduct,
  IProduct,
} from 'src/app/core/models/product.interface';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  product$ = new Observable<IProduct>();
  public product!: IProduct;
  similarProduct$ = new Observable<IBestSillingProduct[]>();

  id!: number;
  inCart: boolean = false;

  totalComments: number = 0;
  displayedComments: string[] = [];
  commentsPerLoad: number = 5;
  currentIndex: number = 0;
  disableLoadMoreButton: boolean = false;

  constructor(
    private productService: ProductService,
    private commentService: CommentService,
    private store: Store<ShopState>,
    public gallery: Gallery,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.store
      .pipe(select(selectExistInCart, { id: this.id }))
      .subscribe((isExist: boolean) => (this.inCart = isExist));

    this.getProductDetails();
    this.getSimilarProducts();
    this.getTotalComments();
  }

  private getProductDetails(): void {
    this.productService.getProductDetails(this.id).subscribe({
      next: (productDetails: IProduct) => {
        this.product$ = of(productDetails);
        this.product = productDetails;

        console.log(productDetails);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  private getSimilarProducts(): void {
    this.similarProduct$ = this.productService.getBestSillingProduct();
  }

  public addToCart(): void {
    this.store.dispatch(AddToCart({ product: this.product }));

    this.inCart = true;
  }

  private getTotalComments(): void {
    this.commentService.getTotalComments().subscribe({
      next: (total: number) => {
        this.totalComments = total;

        this.loadMoreComments();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public loadMoreComments(): void {
    this.commentService
      .getComments(this.currentIndex, this.commentsPerLoad)
      .subscribe({
        next: (newComments: string[]) => {
          this.displayedComments = this.displayedComments.concat(newComments);
          this.currentIndex += this.commentsPerLoad;

          if (this.currentIndex >= this.totalComments) {
            this.disableLoadMoreButton = true;
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}

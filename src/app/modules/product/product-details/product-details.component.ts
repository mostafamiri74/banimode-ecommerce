import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { CommentService } from 'src/app/core/services/comment.service';
import { ProductService } from 'src/app/core/services/product.service';
import { AddToCart } from 'src/app/core/store/actions';
import { ShopState } from 'src/app/core/store/reducer';
import { GalleryItem, ImageItem, Gallery } from 'ng-gallery';
import { ActivatedRoute } from '@angular/router';
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import SwiperCore from 'swiper';
import { selectExistInCart } from 'src/app/core/store/selector';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  id!: any;

  product$ = new Observable<any>();
  public product!: any;

  similarProduct$ = new Observable<any>();

  inCart = false;

  totalComments: number = 0;
  displayedComments: string[] = [];
  commentsPerLoad = 5;
  currentIndex = 0;
  disableLoadMoreButton = false;

  thumbs: any;
  items: GalleryItem[] = [];
  data = [
    {
      srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
      previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    },
    {
      srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
      previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    },
    {
      srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
      previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    },
    {
      srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
      previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    },
  ];

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
      .subscribe((x) => (this.inCart = x));

    this.getProductDetails();
    this.getTotalComments();
    this.getSimilarProducts();

    this.items = this.data.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
  }

  private getProductDetails() {
    this.productService.getProductDetails(this.id).subscribe({
      next: (productDetails) => {
        this.product$ = of(productDetails);
        this.product = productDetails;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  private getSimilarProducts() {
    this.productService.getBestSillingProduct().subscribe({
      next: (product) => {
        this.similarProduct$ = of(product);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public addToCart() {
    this.store.dispatch(AddToCart({ product: this.product }));

    this.inCart = true;
  }

  private getTotalComments() {
    this.commentService.getTotalComments().subscribe({
      next: (total) => {
        this.totalComments = total;

        this.loadMoreComments();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public loadMoreComments() {
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

import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, switchMap } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('search', { static: true }) search!: ElementRef;
  filterProduct!: any[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    fromEvent(this.search.nativeElement, 'input')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(1000),
        switchMap((searchText: string) =>
          this.productService.getAmazingProduct()
        )
      )
      .subscribe((res) => {
        this.filterProduct = res;
      });
  }
}

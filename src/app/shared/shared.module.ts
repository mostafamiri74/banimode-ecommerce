import { NgModule } from '@angular/core';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { PaginationModule } from './pagination/pagination.module';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [PaginationModule, RouterModule, SwiperModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    PaginationModule,
    RouterModule,
    SwiperModule,
  ],
})
export class SharedModule {}

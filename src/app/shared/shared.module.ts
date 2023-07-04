import { NgModule } from '@angular/core';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { PaginationModule } from './pagination/pagination.module';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    PaginationModule,
    RouterModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PaginationModule,
    RouterModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}

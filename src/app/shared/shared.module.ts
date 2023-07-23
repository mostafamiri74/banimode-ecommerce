import { NgModule } from '@angular/core';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { PaginationModule } from './pagination/pagination.module';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    PaginationModule,
    RouterModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PaginationModule,
    RouterModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class SharedModule {}

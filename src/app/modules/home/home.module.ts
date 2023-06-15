import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { HomeCategoryComponent } from './home-category/home-category.component';
import { HomeAmazingComponent } from './home-amazing/home-amazing.component';
import { HomeBestsillingComponent } from './home-bestsilling/home-bestsilling.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';
import { HomeBrandsComponent } from './home-brands/home-brands.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { HomeNewsletterComponent } from './home-newsletter/home-newsletter.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    HomeComponent,
    MainSliderComponent,
    HomeCategoryComponent,
    HomeAmazingComponent,
    HomeBestsillingComponent,
    HomeFeaturesComponent,
    HomeBrandsComponent,
    HomeBlogComponent,
    HomeNewsletterComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SwiperModule],
})
export class HomeModule {}

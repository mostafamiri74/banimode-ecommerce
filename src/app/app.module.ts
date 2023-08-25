import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { LegalNoticeComponent } from './modules/legal-notice/legal-notice.component';
import { ProductModule } from './modules/product/product.module';
import { CartModule } from './modules/cart/cart.module';

import { StoreModule, provideStore } from '@ngrx/store';
import { shopReducer } from './core/store/reducer';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { ShopEffects } from './core/store/effects';
import { appStore, appEffects } from './core/store/store';

@NgModule({
  declarations: [AppComponent, AboutUsComponent, LegalNoticeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    ProductModule,
    CartModule,
    SwiperModule,
    StoreModule.forRoot({ shop: shopReducer }),
    EffectsModule.forRoot([ShopEffects]),
  ],
  providers: [provideStore(appStore), provideEffects(appEffects)],
  bootstrap: [AppComponent],
})
export class AppModule {}

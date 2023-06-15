import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { FooterComponent } from './modules/layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { LegalNoticeComponent } from './modules/legal-notice/legal-notice.component';

@NgModule({
  declarations: [AppComponent, AboutUsComponent, LegalNoticeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

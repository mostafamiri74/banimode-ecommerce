import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './modules/movie-list/movie-list.component';
import { TokenInterceptor } from './core/interceptor/token.interceptor';
import { LoginComponent } from './modules/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { MovieComponent } from './modules/movie-list/movie/movie.component';
import { FilsizePipe } from './shared/pipe/filsize.pipe';

@NgModule({
  declarations: [AppComponent, MovieListComponent, MovieComponent, FilsizePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

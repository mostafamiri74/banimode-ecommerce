import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainWrapperComponent } from './core/components/main-wrapper/main-wrapper.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { LegalNoticeComponent } from './modules/legal-notice/legal-notice.component';

const routes: Routes = [
  {
    path: '',
    component: MainWrapperComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./modules/product/product.module').then(
            (m) => m.ProductModule
          ),
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'legal-notice',
        component: LegalNoticeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

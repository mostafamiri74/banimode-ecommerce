import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: { breadcrumb: '' },
    canActivate: [AuthGuard],
    component: LoginComponent,
  },
  {
    path: 'login',
    data: { breadcrumb: '', title: 'لاگین' },
    canActivate: [AuthGuard],
    component: LoginComponent,
  },
  {
    path: 'signup',
    data: { breadcrumb: '', title: 'ثبتنام' },
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

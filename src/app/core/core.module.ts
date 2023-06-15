import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { HeaderComponent } from '../modules/layout/header/header.component';
import { FooterComponent } from '../modules/layout/footer/footer.component';

@NgModule({
  declarations: [MainWrapperComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class CoreModule {}

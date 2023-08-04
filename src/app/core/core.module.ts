import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { FooterComponent } from '../shared/layout/footer/footer.component';

@NgModule({
  declarations: [MainWrapperComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class CoreModule {}

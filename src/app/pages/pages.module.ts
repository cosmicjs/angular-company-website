import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './page/page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
  exports: [PageComponent]
})
export class PagesModule {}

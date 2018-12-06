import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { throwIfAlreadyLoaded } from './_guards/module-import-guards';
import { ExternalLinksComponent } from './external-links/external-links.component';
import { NavigationLinksComponent } from './navigation-links/navigation-links.component';

@NgModule({
  declarations: [MenuComponent, ExternalLinksComponent, NavigationLinksComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenuComponent, ExternalLinksComponent, NavigationLinksComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

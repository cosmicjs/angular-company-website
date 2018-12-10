import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrustCosmicPipe } from './_pipes/trust-cosmic.pipe';

@NgModule({
  exports: [TrustCosmicPipe],
  declarations: [TrustCosmicPipe],
  imports: [CommonModule]
})
export class SharedModule {}

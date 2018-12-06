import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { CosmicService } from '../_services/cosmic.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HomepageGuard implements CanActivate {
  constructor(private router: Router, private cosmicService: CosmicService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.cosmicService.getMainPresets().pipe(
      map(presets => {
        return this.router.parseUrl(`/${presets.homepage.slug}`);
      })
    );
  }
}

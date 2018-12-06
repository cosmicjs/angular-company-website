import { Component, OnChanges, Input } from '@angular/core';
import { Navigation } from '../_model';
import { CosmicService } from '../_services/cosmic.service';

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.scss']
})
export class NavigationLinksComponent implements OnChanges {
  @Input() navigationID: string;
  public navigation: Navigation;

  constructor(private cosmicService: CosmicService) {}

  ngOnChanges() {
    if (this.navigationID) {
      this.cosmicService.getNavigation(this.navigationID).subscribe(navigation => (this.navigation = navigation));
    }
  }
}

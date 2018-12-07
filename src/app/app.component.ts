import { Component, OnInit } from '@angular/core';
import { CosmicService, AnalyticsService } from './core';
import { Title } from '@angular/platform-browser';
import { FaviconService } from './core/_services/favicon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public footerNavigationID: string;

  constructor(
    private cosmicService: CosmicService,
    private titleService: Title,
    private faviconService: FaviconService,
    private analyticsService: AnalyticsService
  ) {}

  ngOnInit() {
    this.getCosmicPresets();
  }

  private getCosmicPresets() {
    this.cosmicService.getMainPresets().subscribe(presets => {
      this.faviconService.setFavicon(presets.faviconUrl);
      this.titleService.setTitle(presets.companyName);

      if (presets.footerNavigation) {
        this.footerNavigationID = presets.footerNavigation._id;
      }

      // if analytics, set UA and start the service
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CosmicService, AnalyticsService } from './core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public footerNavigationID: string;
  constructor(private cosmicService: CosmicService, private titleService: Title, private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.cosmicService.getMainPresets().subscribe(presets => {
      this.titleService.setTitle(presets.companyName);
      if (presets.footerNavigation) {
        this.footerNavigationID = presets.footerNavigation._id;
      }
    });
  }
}

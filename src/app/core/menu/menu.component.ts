import { Component, OnInit } from '@angular/core';
import { Navigation } from '../_model';
import { CosmicService } from '../_services/cosmic.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public logo: string;
  public navigation: Navigation;
  public title: string;
  public isMenuActive: Boolean = false;

  constructor(private cosmicService: CosmicService) {}

  ngOnInit() {
    this.cosmicService.getMainPresets(true).subscribe(presets => {
      this.logo = presets.companyLogoUrl;
      this.navigation = presets.mainNavigation;
      this.title = presets.companyName;
    });
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}

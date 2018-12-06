import { Component, OnInit } from '@angular/core';
import { CosmicService } from '../_services/cosmic.service';
import { ExternalLink } from '../_model';

@Component({
  selector: 'app-external-links',
  templateUrl: './external-links.component.html',
  styleUrls: ['./external-links.component.scss']
})
export class ExternalLinksComponent implements OnInit {
  public links: ExternalLink[];

  constructor(private cosmicService: CosmicService) {}

  ngOnInit() {
    this.cosmicService.getExternalLinks().subscribe(links => (this.links = links));
  }
}

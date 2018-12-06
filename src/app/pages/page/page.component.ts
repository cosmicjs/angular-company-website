import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CosmicService } from 'src/app/core';
import { Page } from 'src/app/core/_model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  public page: Page;

  constructor(private route: ActivatedRoute, private cosmicService: CosmicService) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('slug')),
        switchMap(slug => (slug ? this.cosmicService.getPage(slug) : EMPTY))
      )
      .subscribe(page => (this.page = page));
  }

  setBackground() {
    if (this.page.banner) {
      const styles: Object = {
        background: `url(${this.page.banner}) no-repeat center center`,
        'background-size': 'cover'
      };
      return styles;
    } else {
      return null;
    }
  }
}

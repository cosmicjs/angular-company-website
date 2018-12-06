import { Page } from './page';

export class Navigation {
  _id: string;
  pages: Page[];
  slug: string;
  title: string;

  constructor(obj) {
    this._id = obj._id;
    this.pages = [];
    this.slug = obj.slug;
    this.title = obj.title;
    if (obj.metadata && obj.metadata.pages_in_menu) {
      obj.metadata.pages_in_menu.map(page => this.pages.push(new Page(page)));
    }
  }
}

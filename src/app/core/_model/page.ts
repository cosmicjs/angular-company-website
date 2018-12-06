export class Page {
  _id: string;
  banner: string;
  content: string;
  related: Page[];
  slug: string;
  title: string;

  constructor(obj) {
    this._id = obj._id;
    this.banner = '';
    this.content = obj.content;
    this.related = [];
    this.slug = obj.slug;
    this.title = obj.title;

    if (obj.metadata) {
      if (obj.metadata.related_pages) {
        obj.metadata.related_pages.map(page => this.related.push(new Page(page)));
      }
      if (obj.metadata.banner) {
        this.banner = obj.metadata.banner.url;
      }
    }
  }
}

import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ɵgetDOM as getDOM } from '@angular/platform-browser';

/**
 * A service to set the favicon.
 */
@Injectable({
  providedIn: 'root'
})
export class FaviconService {
  constructor(@Inject(DOCUMENT) private _doc: any) {}

  /**
   * Set the title of the current HTML document.
   * @param iconURL - New favicon URL
   */
  setFavicon(iconURL: string) {
    const link = getDOM().querySelector(this._doc, "link[rel*='icon']");
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = iconURL;
    getDOM()
      .getElementsByTagName(this._doc, 'head')[0]
      .appendChild(link);
  }
}

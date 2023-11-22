import { Injectable } from '@angular/core';
import { PortfolioItem } from '../portfolio-item.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService { 

  portfolioItems: PortfolioItem[] = [
    new PortfolioItem("Taylor N. White | Author/Illustrator Portfolio", "assets/images/taynwhite.jpg", "https://taynwhite.com/", ["all", "html", "css", "javascript", "bootstrap", "react", "contentful"]),
    new PortfolioItem("Wesley Lewis | Saxophonist/Composer Portfolio", "assets/images/wesleylewis.jpg", "https://www.wesleyraylewis.com/", ["all", "html", "css", "javascript", "bootstrap", "react",]),
    new PortfolioItem("Hussain Hamoudi Music", "assets/images/music-website.jpg", "https://www.hussainhamoudi.com", ["all", "html", "css", "javascript", "jquery", "angular", "bootstrap", "typescript"]),
    new PortfolioItem("Winmill", "assets/images/winmill.png", "https://winmill.com/", ["all", "html", "css", "javascript", "jquery", "php", "bootstrap", "wordpress"]),
    new PortfolioItem("Intermountain Medical Imaging", "assets/images/imi.jpg", "https://www.aboutimi.com/", ["all", "html", "css", "javascript", "jquery", "php", "bootstrap", "wordpress"]),
    new PortfolioItem("Winmill PPM", "assets/images/ppm.png", "https://ppm.winmill.com/", ["all", "html", "css", "javascript", "jquery", "php", "bootstrap", "wordpress"]),
    new PortfolioItem("Winmill eMembership", "assets/images/emem.png", "https://emembership.winmill.com/", ["all", "html", "css", "javascript", "jquery", "php", "bootstrap", "wordpress"]),
    new PortfolioItem("Pet Boss Nation", "assets/images/petboss.png", "https://petboss.com/", ["all", "html", "css", "javascript", "jquery", "php", "bootstrap", "wordpress"]),
    new PortfolioItem("Advanced Vein Therapy", "assets/images/avt.png", "https://aboutavt.com/", ["all", "html", "css", "javascript", "jquery", "php", "bootstrap", "wordpress"]),
    new PortfolioItem("Reno Diagnostic Imaging", "assets/images/Reno.jpg", "https://www.renodiagnosticcenters.com/", ["all", "html", "css", "javascript", "jquery", "php", "bootstrap", "wordpress"]),
    new PortfolioItem("Hussain Hamoudi Portfolio", "assets/images/hamoudidigital-website.jpg", "https://www.hamoudidigital.com", ["all", "html", "css", "javascript", "jquery", "angular", "bootstrap", "typescript"]),
  ]

  constructor() { }
  
  getPortfolio() {
    return this.portfolioItems.slice();
  }

  getfirstItem(array: PortfolioItem[]) {
    return array.pop();
  }
}

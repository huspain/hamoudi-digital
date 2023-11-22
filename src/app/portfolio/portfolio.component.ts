import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { PortfolioItem } from '../portfolio-item.model';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('portState', [
      state('inactive', style({
        'opacity' : '0',
        'transform' : 'scale(0.9)'
      })),
      state('active', style({
        'opacity' : '1',
        'transform' : 'scale(1)'
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ])
  ]
})
export class PortfolioComponent implements OnInit {

  portfolioItems: PortfolioItem[];
  selectedTech: String = "all";

  portState = 'active';
  headerState = 'inactive';
  portRevealState = 'inactive';

  headerY: number;
  portY: number;

  @ViewChild('portHeader', {static : true}) portHeader: ElementRef;
  @ViewChild('portItem', {static : true}) portItem: ElementRef;
  

  constructor(private portService: PortfolioService, private recaptchaV3Service: ReCaptchaV3Service) { } 
 
  ngOnInit() {
    this.portfolioItems = this.portService.getPortfolio();
    this.headerY = this.portHeader.nativeElement.getBoundingClientRect().top;
    this.portY = this.portItem.nativeElement.getBoundingClientRect().top;
  }

  async selectChange(event: any) {
    this.portState = 'inactive';
    await this.delay(600);
    this.selectedTech = event.target.value;
    this.portState = 'active'
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  hidePortfolio() {
    this.portState = 'inactive';
  }
  showPortfolio() {
    this.portState = 'active'
  }

  @HostListener('window:scroll', []) 
    onHeaderScroll($event: any): void {
      const headerPosition = this.headerY - window.innerHeight / 2;
      const portPosition = this.portY - window.innerHeight / 2;
      const scrollPosition = window.pageYOffset;

      switch (scrollPosition >= headerPosition) {

        case true:
          this.headerState = 'active';
          break;
      }
      switch (scrollPosition >= portPosition) {

        case true:
          this.portRevealState = 'active';
          break;
      }
    }
}
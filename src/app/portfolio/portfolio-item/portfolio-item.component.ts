import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { PortfolioItem } from 'src/app/portfolio-item.model';

@Component({ 
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {

  @Input() portfolioItem: PortfolioItem;
  @Input() index: number;

  constructor(private portService: PortfolioService) { }

  ngOnInit() { }

}

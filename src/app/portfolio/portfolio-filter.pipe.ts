import { Pipe, PipeTransform } from '@angular/core';
import { PortfolioItem } from '../portfolio-item.model';

@Pipe({
  name: 'portfolioFilter'
})
export class PortfolioFilterPipe implements PipeTransform {

  transform(value: any, currentTech: string): any {
    const resultArray = [];
    for(let item of value){
      if(item.tech.includes(currentTech)){
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}

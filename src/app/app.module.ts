import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioItemComponent } from './portfolio/portfolio-item/portfolio-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderStickyComponent } from './header-sticky/header-sticky.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { PortfolioFilterPipe } from './portfolio/portfolio-filter.pipe';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    PortfolioComponent,
    FooterComponent,
    HeaderComponent,
    PortfolioItemComponent,
    HeaderStickyComponent,
    HeaderMobileComponent,
    PortfolioFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AnimateOnScrollModule.forRoot(),
    RecaptchaV3Module
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6Ld2J8sUAAAAABhSkrekS91WQI6hv71mgMXA9aUCKEY' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

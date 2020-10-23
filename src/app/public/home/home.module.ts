import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeFeatureCardComponent } from './home-feature-card/home-feature-card.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';
import {PublicRoutingModule} from '../public-routing.module';



@NgModule({
  declarations: [HomeComponent, HomeBannerComponent, HomeFeatureCardComponent, HomeFeaturesComponent],
    imports: [
        CommonModule,
        PublicRoutingModule
    ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PagesComponent } from './pages.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
ProductsComponent
import { ProductsComponent } from './components/products/products.component';
import { BenefitsComponent } from './components/benefits/benefits.component';

const COMPONENTS = [CarouselComponent, BenefitsComponent, PagesComponent, ProductsComponent]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    TemplatesModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }

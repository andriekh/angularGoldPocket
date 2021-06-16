import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorouselComponent } from './components/corousel/corousel.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { PagesComponent } from './pages.component';
ProductsComponent
import { ProductsComponent } from './components/products/products.component';
import { TemplatesModule } from '../templates/templates.module';

const COMPONENTS = [CorouselComponent, BenefitsComponent, PagesComponent, ProductsComponent]

@NgModule({
  declarations: [
    ...COMPONENTS
    
  ],
  imports: [
    CommonModule,
    TemplatesModule,
    // MatButtonModule,
    // MatCardModule
  
  ],
  exports: [
    PagesComponent
  ]

})
export class PagesModule { }

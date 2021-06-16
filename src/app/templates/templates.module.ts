import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TemplatesComponent } from './templates.component';



const COMPONENTS = [HeaderComponent, FooterComponent, TemplatesComponent]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplatesComponent
  ]
})
export class TemplatesModule { }

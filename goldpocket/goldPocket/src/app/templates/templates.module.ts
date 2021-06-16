import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesComponent } from './templates.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const COMPONENTS = [HeaderComponent, FooterComponent, TemplatesComponent]

@NgModule({
  declarations: [
    ...COMPONENTS

  ],
  imports: [
    CommonModule
  ],

  exports: [
    TemplatesModule
  ]
})
export class TemplatesModule { }

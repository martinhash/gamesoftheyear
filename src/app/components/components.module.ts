import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { NavbarComponent } from './navbar/navbar.component';
import { GraphicsHorizontalComponent } from './graphics-horizontal/graphics-horizontal.component';



@NgModule({
  declarations: 
  [
    NavbarComponent,
    GraphicsHorizontalComponent
  ],
  exports:[
    NavbarComponent,
    GraphicsHorizontalComponent
  ],
  imports: 
  [
    CommonModule,
    RouterModule
  ],
})
export class ComponentsModule { }

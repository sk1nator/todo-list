import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';



@NgModule({
  declarations: [MainMenuComponent],
  exports: [
    MainMenuComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class CoreModule { }

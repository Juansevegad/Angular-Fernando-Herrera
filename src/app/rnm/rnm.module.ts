import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './characters/characters.component';
import { AddComponent } from './add/add.component';
import { RnmService } from './services/rnm.service';



@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MainPageComponent],
  providers: [RnmService]
})
export class RnmModule { }

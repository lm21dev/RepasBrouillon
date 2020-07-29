import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlimentContainerComponent } from './aliment-container/aliment-container.component';
import { AlimentRechercheComponent } from './aliment-recherche/aliment-recherche.component';
import { AlimentListComponent } from './aliment-list/aliment-list.component';
import { RepasComponent } from './repas/repas.component';
import { AlimentComponent } from './repas/aliment/aliment.component';
import { CycleVieComponent } from './cycle-vie/cycle-vie.component';
import { CycleItemComponent } from './cycle-vie/cycle-item/cycle-item.component';
import { SurlignerDirectiveDirective } from './surligner-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    AlimentContainerComponent,
    AlimentRechercheComponent,
    AlimentListComponent,
    RepasComponent,
    AlimentComponent,
    CycleVieComponent,
    CycleItemComponent,
    SurlignerDirectiveDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

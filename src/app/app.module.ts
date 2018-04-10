import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AlgoritmoGeneticoService } from './services/algoritmo-genetico.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [AlgoritmoGeneticoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

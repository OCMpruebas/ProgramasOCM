import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IndiceComponent } from './programas/indice/indice.component';
import { AboutComponent } from './programas/about/about.component';
import { ProgramaComponent } from './programas/programa/programa.component';
import { CardBasicoComponent } from './shared/cards/card-basico/card-basico.component';
import { CardInfoProgramaComponent } from './shared/cards/card-info-programa/card-info-programa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndiceComponent,
    AboutComponent,
    ProgramaComponent,
    CardBasicoComponent,
    CardInfoProgramaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservacionComponent } from './componentes/reservacion/reservacion.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from './../environments/environment';
import { DataDbService } from './services/data-db.service';
import { CommonModule } from '@angular/common';
import { CasaComponent } from './componentes/casa/casa.component';
import { GalleryComponent } from './componentes/gallery/gallery.component';
import { AboutusComponent } from './componentes/aboutus/aboutus.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservacionComponent,
    CasaComponent,
    GalleryComponent,
    AboutusComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [DataDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }

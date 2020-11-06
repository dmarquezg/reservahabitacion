import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './componentes/aboutus/aboutus.component';
import { CasaComponent } from './componentes/casa/casa.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { GalleryComponent } from './componentes/gallery/gallery.component';
import { ReservacionComponent } from './componentes/reservacion/reservacion.component';

const routes: Routes = [
  { path: 'home', component: GalleryComponent },
  { path: 'reservacion', component: ReservacionComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContactoComponent },
  { path: 'admin', component: CasaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

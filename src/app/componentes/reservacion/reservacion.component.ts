import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../services/data-db.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {

  createFromGroup(){
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      tel: new FormControl('', [Validators.required, Validators.minLength(10)]),
      estancia: new FormControl('', [Validators.required]),
      duracion: new FormControl('', [Validators.required]),
      tipohabitacion: new FormControl('', [Validators.required]),
      tipoinquilino: new FormControl('', [Validators.required])
    });
  }

  reservaForm: FormGroup;

  constructor(private dbData: DataDbService) {
    this.reservaForm = this.createFromGroup();
  }

  get name() { return this.reservaForm.get('name'); }
  get apellidos() { return this.reservaForm.get('apellidos'); }
  get tel() { return this.reservaForm.get('tel'); }
  get estancia() { return this.reservaForm.get('estancia'); }
  get duracion() { return this.reservaForm.get('duracion'); }
  get tipohabitacion() { return this.reservaForm.get('tipohabitacion'); }
  get tipoinquilino() { return this.reservaForm.get('tipoinquilino'); }

  ngOnInit(): void {
  }

  onResetForm(){
    this.reservaForm.reset();
  }

  onSaveForm(){
    if(this.reservaForm.valid){
      this.dbData.saveMessage(this.reservaForm.value);
      this.onResetForm();
      window.alert('Reservacion realizada con éxito');
    } else {
      window.alert('Ocurrió un error. Intente de nuevo');
    }
  }

 
}

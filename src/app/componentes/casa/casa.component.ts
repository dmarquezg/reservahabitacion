import { Component, OnInit } from '@angular/core';
import { StudentI } from '../../models/message.interface';
import { DataDbService } from '../../services/data-db.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.css']
})

export class CasaComponent implements OnInit {
  reservas: StudentI[];
  editState: boolean = false;
  reservaToEdit: StudentI;

  constructor(private reservaService: DataDbService) { }

  ngOnInit(): void {
    this.reservaService.getReservas().subscribe(reservas => {
      this.reservas = reservas;
    });
  }

  editReserva(event, reserva: StudentI) {
    this.editState = true;
    this.reservaToEdit = reserva;
  }

  updateReserva(reserva: StudentI) {
    this.reservaService.updateReserva(reserva);
    this.clearState();
  }

  eliminarReserva(event, reserva: StudentI) {
    this.reservaService.deleteReserva(reserva);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.reservaToEdit = null;
  }

  closemodalSave(){
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }

}

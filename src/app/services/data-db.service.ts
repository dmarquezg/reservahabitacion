import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { StudentI } from '../models/message.interface';
import { map } from 'rxjs/operators';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataDbService {
  private reservaCollection: AngularFirestoreCollection<StudentI>;
  private reservas: Observable<StudentI[]>;
  private reservaDoc: AngularFirestoreDocument<StudentI>;

  constructor(private afs: AngularFirestore) {
    this.reservaCollection = afs.collection<StudentI>('registro_inquilinos');
    this.reservas = this.reservaCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as StudentI;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getReservas() {
    return this.reservas;
  }

  saveMessage(reserva: StudentI): void{
    this.reservaCollection.add(reserva);
  }

  deleteReserva(reserva: StudentI) {
    this.reservaDoc = this.afs.doc(`registro_inquilinos/${reserva.id}`);
    this.reservaDoc.delete();
    console.log('Delete reservation', reserva);
  }

  updateReserva(reserva: StudentI) {
    this.reservaDoc = this.afs.doc(`registro_inquilinos/${reserva.id}`);
    this.reservaDoc.update(reserva);
    //console.log('Update reservation', reserva);
  }
  
}

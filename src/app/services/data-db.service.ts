import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MessageI } from '../models/message.interface';

@Injectable({
  providedIn: 'root'
})
export class DataDbService {
  private reservaCollection: AngularFirestoreCollection<MessageI>;
  constructor(private afs: AngularFirestore) {
    this.reservaCollection = afs.collection<MessageI>('registro_inquilinos');
  }
  

  saveMessage(newContact: MessageI): void{
    this.reservaCollection.add(newContact);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariablesGlobalesService {
  private mensajeError = new BehaviorSubject<string>('');
  private mensajeToast = new BehaviorSubject<[string, string, string]>(['', '', '']);

  constructor() {}

  setMensajeError(mensaje: string) {
      this.mensajeError.next(mensaje);
  }

  getMensajeError() {
      return this.mensajeError.asObservable();
  }

  setMensajeToast(mensaje: string, cabecera: string, tipo: string) {
      this.mensajeToast.next([mensaje, cabecera, tipo]);
  }

  getMensajeToast() {
      return this.mensajeToast.asObservable();
  }

}

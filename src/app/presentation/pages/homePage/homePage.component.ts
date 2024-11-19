import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { VariablesGlobalesService } from '../../../services/variablesGlobales.service';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        CommonModule,
        ButtonModule,
    ],
    templateUrl: './homePage.component.html',
    styleUrl: './homePage.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePageComponent {
    constructor(private _vg: VariablesGlobalesService ) { }
    
    LanzarError() {
        this._vg.setMensajeError('hola');
      }
      
      LanzarMensajes() {
        this._vg.setMensajeToast('Mensajes de ok', 'success', 'Todo bien');
        this._vg.setMensajeToast('Mensajes de información', 'info', 'Informativo');
        this._vg.setMensajeToast('Mensajes de advertencia', 'warn', 'Advertencia');
      }
 }

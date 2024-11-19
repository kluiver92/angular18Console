import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { VariablesGlobalesService } from '../../../services/variablesGlobales.service';

@Component({
    selector: 'app-global-layout',
    standalone: true,
    imports: [
        CommonModule,
        MessagesModule,
        ToastModule,
    ],
    templateUrl: './globalLayout.component.html',
    styleUrl: './globalLayout.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalLayoutComponent implements OnInit {

  constructor(private _vg: VariablesGlobalesService , private _msg: MessageService) { }

  ngOnInit(): void {
    // Detecta cambios en el mensaje de error global
    this._vg.getMensajeError().subscribe((mensaje: string) => {
        if (mensaje !== '') {
            this.MostrarMensajeError(mensaje);
        }
    });
    
    this._vg.getMensajeToast().subscribe((mensaje: [string, string, string]) => {
        if (mensaje[0] !== '') {
            this.MostrarMensajeToast(mensaje);
        }
    });
}
    MostrarMensajeError(mensaje: string) {
        this._msg.add({key: 'toastError', severity: 'error', summary: 'Se ha producido un error', detail: mensaje, life: 6000});
    }
    
    MostrarMensajeToast(mensaje: [string, string, string]) {
        let duracion: number = 3000;
    
        switch (mensaje[1]) {
            case 'info': duracion = 3000; break;
            case 'warn': duracion = 5000; break;
            case 'success': duracion = 2000; break;
        }
    
        this._msg.add({key: 'toastMensaje', severity: mensaje[1], summary: mensaje[2], detail: mensaje[0], life: duracion});
    }
}

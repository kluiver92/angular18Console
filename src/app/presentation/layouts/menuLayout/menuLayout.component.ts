//Angular
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
//Proyecto
import { SideBarMenuItemComponent } from "../../components/siderBarMenuItem/siderBarMenuItem.component";
import { routes } from '../../../app.routes';

@Component({
    selector: 'app-menu-layout',
    standalone: true,
    imports: [
    CommonModule,
    RouterModule,
    SideBarMenuItemComponent
],
    templateUrl: './menuLayout.component.html',
    styleUrl: './menuLayout.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuLayoutComponent {
    @Output() optionClicked = new EventEmitter<string>();
  
    // Rutas filtradas
    public routes = routes[0]?.children?.filter((route) => route.data);
  
    // Método para manejar clics en el menú
    optionClick(option: string) {
      this.optionClicked.emit(option);
    }
  }

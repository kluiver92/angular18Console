//Angular
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//Proyecto
import { HeaderLayoutComponent } from "../headerLayout/headerLayout.component";
import { GlobalLayoutComponent } from "../globalLayout/globalLayout.component";
import { MenuLayoutComponent } from "../menuLayout/menuLayout.component";

@Component({
    selector: 'app-dashboard-layout',
    standalone: true,
    imports: [
    CommonModule,
    RouterModule,
    HeaderLayoutComponent,
    GlobalLayoutComponent,
    MenuLayoutComponent
],
    templateUrl: './dashboardLayout.component.html',
    styleUrl: './dashboardLayout.component.css',
    changeDetection: ChangeDetectionStrategy.Default,
})
export class DashboardLayoutComponent { }

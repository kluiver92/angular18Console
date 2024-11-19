import { ChangeDetectionStrategy, Component,Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sider-bar-menu-item',
    standalone: true,
    imports: [
        RouterModule,
    ],
    templateUrl: './siderBarMenuItem.component.html',
    styleUrl: './siderBarMenuItem.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarMenuItemComponent {
    @Input({ required: true }) icon: string = '';
    @Input({ required: true }) title: string = '';
    @Input({ required: true }) description: string = '';
    @Input({ required: true }) path: string = '';
  }

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//PrimeNg
import {PrimeNGConfig} from 'primeng/api';
import {ToastModule}  from 'primeng/toast';
import {MessagesModule}  from 'primeng/messages';
import {ButtonModule}  from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    //PrimeNg
    ToastModule,
    MessagesModule,
    ButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app_angular_ng';

  constructor(private primengConfig: PrimeNGConfig){}

  
  ngOnInit() {
    this.primengConfig.ripple = false;
    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
  };
}
  
}

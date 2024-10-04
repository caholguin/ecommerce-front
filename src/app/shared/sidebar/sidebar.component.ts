import { Component, ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  sidebarVisible: boolean = true;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToolbarModule,InputIconModule, IconFieldModule, InputTextModule,ButtonModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

  // Método para alternar el menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Método para cerrar el menú
  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleSidebar(){
    console.log("llego al sidebar");
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuitemComponent } from '../menuitem/menuitem.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterModule,MenuitemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{
  model: any[] = [];
  ngOnInit(): void {
    this.model = [
      {
          label: 'Home',
          items: [
              { label: 'Dashboard', icon: 'dashboard', },
              { label: 'Familias', icon: 'inventory_2', },
              { label: 'Categorias', icon: 'category', },
              { label: 'SubCategorias', icon: 'label_important', },
              { label: 'Opciones', icon: 'settings', },
              { label: 'Productos', icon: 'inventory', },
              { label: 'Caracteristicas', icon: 'featured_play_list', },
          ]
      }     
      
  ];
  }
}

import { ChangeDetectorRef, Component, HostBinding, inject, Input, OnInit } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { MenuService } from '../../../services/Menu.service';
import { LayoutService } from '../../../services/Layout.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule,MenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{



  @Input() item: any;

  @Input() index!: number;

  @Input() @HostBinding('class.layout-root-menuitem') root!: boolean;

  @Input() parentKey!: string;

  active = false;

  menuSourceSubscription: Subscription;

  menuResetSubscription: Subscription;

  key: string = "";

  


  ngOnInit(): void {
    this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);

    if (this.item.routerLink) {
        this.updateActiveStateFromRoute();
    }

    
  } 

  constructor(public layoutService: LayoutService,private cd: ChangeDetectorRef, public router: Router, private menuService: MenuService) {
    this.menuSourceSubscription = this.menuService.menuSource$.subscribe((value:any) => {
        Promise.resolve(null).then(() => {
            if (value.routeEvent) {
                this.active = (value.key === this.key || value.key.startsWith(this.key + '-')) ? true : false;
            }
            else {
                if (value.key !== this.key && !value.key.startsWith(this.key + '-')) {
                    this.active = false;
                }
            }
        });
    });

    this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
        this.active = false;
    });

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((params: any) => {
            if (this.item.routerLink) {
                this.updateActiveStateFromRoute();
            }
        });


        
}

updateActiveStateFromRoute() {
  let activeRoute = this.router.isActive(this.item.routerLink[0], { paths: 'exact', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' });

  if (activeRoute) {
      this.menuService.onMenuStateChange({ key: this.key, routeEvent: true });
  }
}

itemClick(event: Event) {
  // avoid processing disabled items
  if (this.item.disabled) {
      event.preventDefault();
      return;
  }

  // execute command
  if (this.item.command) {
      this.item.command({ originalEvent: event, item: this.item });
  }

  // toggle active state
  if (this.item.items) {
      this.active = !this.active;
  }

  this.menuService.onMenuStateChange({ key: this.key });
}

get submenuAnimation() {
  return this.root ? 'expanded' : (this.active ? 'expanded' : 'collapsed');
}

@HostBinding('class.active-menuitem') 
get activeClass() {
  return this.active && !this.root;
}

ngOnDestroy() {
  if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
  }

  if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
  }
}









  /* sidebarVisible = true;


  private sidebarService = inject(SidebarService);


  toggleSidebar() {
    this.sidebarService.toggleSidebar();  
  }

  ngOnInit(): void {
    this.sidebarService.sidebarVisible.subscribe(visible => {
      this.sidebarVisible = visible;
    });
  }
 */

  

}

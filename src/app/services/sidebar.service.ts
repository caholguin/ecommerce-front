import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public sidebar = new BehaviorSubject<boolean>(false);
  public sidebarVisible = this.sidebar.asObservable();

  showSidebar = false;

  toggleSidebar(){
    this.sidebar.next(!this.sidebar.value);
    this.showSidebar = this.sidebar.value;
  }
}

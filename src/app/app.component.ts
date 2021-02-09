import { PopoverWindowService } from './popover-window/popover-window.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private popoverWindowService: PopoverWindowService
  ) { }

  compose(): void {
    this.popoverWindowService.openWindow();
  }
}

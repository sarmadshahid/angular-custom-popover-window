import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { PopoverWindowComponent } from './popover-window.component';

@Injectable({
  providedIn: 'root'
})
export class PopoverWindowService {
  private overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay
  ) { }

  openWindow(): void {
    if (this.overlayRef && this.overlayRef.hasAttached()) { return; }
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().bottom(),
      hasBackdrop: false
    });
    this.overlayRef.attach(new ComponentPortal(PopoverWindowComponent));
  }

  closeWindow(): void {
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}

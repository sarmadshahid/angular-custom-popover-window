import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { PopoverWindowModule } from './popover-window/popover-window.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    BrowserAnimationsModule,
    MaterialModule,
    PopoverWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

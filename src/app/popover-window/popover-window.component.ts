import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopoverWindowService } from './popover-window.service';

@Component({
  selector: 'app-popover-window',
  templateUrl: './popover-window.component.html',
  styleUrls: ['./popover-window.component.scss'],
  animations: [
    trigger('myAnimationTrigger', [
      state('show', style({
          'max-height': '300px',
      })),
      state('hide', style({
          'max-height': '0px',
      })),
      transition('hide => show', [
        animate('500ms', style({ 'max-height': '300px' })),
      ]),
      transition('show => hide', [
        animate('500ms', style({ 'max-height': '0px' })),
      ])
    ])
  ]
})
export class PopoverWindowComponent implements OnInit {
  showBody = true;

  emailForm: FormGroup;
  submitted = false;

  constructor(
    private popoverWindowService: PopoverWindowService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  getDisplayCommentsState(): string {
    return this.showBody ? 'show' : 'hide';
  }

  close(): void {
    this.popoverWindowService.closeWindow();
  }

  initializeForm(): void {
    this.emailForm = this.formBuilder.group({
      to: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      subject: [''],
      body: ['']
    });
  }

  get f(): any { return this.emailForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.emailForm.invalid) {
        return;
    }

    alert(JSON.stringify(this.emailForm.value));
  }
}

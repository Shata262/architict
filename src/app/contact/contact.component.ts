import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

import {
  trigger,
  style,
  animate,
  transition,
  group,
  query,
  animateChild,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {}
  length = '10';
  toggleDisabled = false;
  isShown = true;

  toggle() {
    this.isShown = !this.isShown;
  }

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: ['', Validators.required],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  constructor(private fb: FormBuilder) {}
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
















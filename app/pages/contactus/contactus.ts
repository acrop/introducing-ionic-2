import {Page, NavController} from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/common';

@Page({
  templateUrl: 'build/pages/contactus/contactus.html'
})
export class ContactusPage {
  public contactForm: any;
  constructor(private nav: NavController, fb: FormBuilder) {
    this.contactForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  submitForm() {
    debugger;
  }
}

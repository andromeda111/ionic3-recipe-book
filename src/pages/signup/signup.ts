import { Component } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  onSignup(form: NgForm) {
    console.log(form.value);
    
  }


}

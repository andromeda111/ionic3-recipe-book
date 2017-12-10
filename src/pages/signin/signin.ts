import { Component } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  onSignin(form: NgForm) {
    console.log(form.value);
    
  }


}

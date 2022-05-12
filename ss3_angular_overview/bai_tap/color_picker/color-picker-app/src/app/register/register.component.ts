import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountRegister} from "../accountRegister";
import {gte} from "../gte";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  account: AccountRegister = new AccountRegister();

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      rePassword: ['',[Validators.required, Validators.minLength(6)]],
      country: ['Vietnam',[Validators.required]],
      age: ['',[Validators.required, gte]],
      gender: ['1',[Validators.required]],
      phone: ['',[Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]]
    })
  }

  ngOnInit(): void {
  }

  get email(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get rePassword(){
    return this.registerForm.get('rePassword');
  }
  get country(){
    return this.registerForm.get('country');
  }
  get age(){
    return this.registerForm.get('age');
  }
  get gender(){
    return this.registerForm.get('gender');
  }
  get phone(){
    return this.registerForm.get('phone');
  }




  onSubmit() {
    if (this.registerForm.invalid) {
      if (this.email.value == '') {
        this.email.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.password.value == '') {
        this.password.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.rePassword.value == '') {
        this.rePassword.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.country.value == '') {
        this.country.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.age.value == '') {
        this.age.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.gender.value == '') {
        this.gender.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.phone.value == '') {
        this.phone.setErrors({empty: 'Empty! Please input!'})
      }
      if (this.password.value != '' && this.rePassword.value != ''){
        if (this.password.value != this.rePassword.value){
          this.password.setErrors({confirm: 'Wrong confirm password! Please input again!'})
          this.rePassword.setErrors({confirm: 'Wrong confirm password! Please input again!'})
        }
      }

      console.log(this.registerForm.value)

    } else {
      console.log(this.registerForm.value)
      this.account.email = this.registerForm.value.email;
      this.account.password = this.registerForm.value.password;
      this.account.country = this.registerForm.value.country;
      this.account.age = this.registerForm.value.age;
      this.account.gender = this.registerForm.value.gender;
      this.account.phone = this.registerForm.value.phone;
      console.log('a')
    }
  }
}

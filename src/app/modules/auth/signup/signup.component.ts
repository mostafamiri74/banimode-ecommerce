import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  public signupForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createSignupForm();
  }

  private createSignupForm(): void {
    this.signupForm = this.fb.group(
      {
        name: ['', Validators.required],
        userName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.maxLength(15),
            Validators.pattern('[0-9]*$'),
          ],
        ],
        passwordConfirm: ['', Validators.required],
      },
      {
        validator: ConfirmedValidator('password', 'passwordConfirm'),
      }
    );
  }

  public signup(): void {
    console.log(this.signupForm.value);
  }
}

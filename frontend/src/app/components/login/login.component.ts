import { Component, signal } from '@angular/core';
import { FormRoot, FormField, form, required } from '@angular/forms/signals';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

interface LoginData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [FormRoot, MatFormField, MatLabel, MatInput, MatButton, FormField],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  readonly loginModel = signal<LoginData>({
    username: '',
    password: '',
  });

  readonly loginForm = form<LoginData>(
    this.loginModel,
    (schemaPath) => {
      required(schemaPath.username, { message: 'Username is required' });
      required(schemaPath.password, { message: 'Password is required' });
    },
    {
      submission: {
        action: async (field) => {
          // TODO field().value()
        },
        onInvalid: (field) => {
          // TODO
        },
      },
    },
  );
}

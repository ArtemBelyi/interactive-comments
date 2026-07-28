import { Component, signal, inject } from '@angular/core';
import { FormRoot, FormField, form, required, email } from '@angular/forms/signals';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { AuthService } from '../../core/services/auth.service';
import { RegisterData } from '../../core/services/auth-types';

@Component({
  selector: 'app-register',
  imports: [FormRoot, MatFormField, MatLabel, MatInput, MatButton, FormField],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private authService = inject(AuthService);

  readonly registerModel = signal<RegisterData>({
    username: '',
    email: '',
    password: '',
  });

  readonly registerForm = form<RegisterData>(
    this.registerModel,
    (schemaPath) => {
      required(schemaPath.username, { message: 'Username is required' });
      required(schemaPath.email, { message: 'Email is required' });
      email(schemaPath.email, { message: 'Email must be valid' });
      required(schemaPath.password, { message: 'Password is required' });
    },
    {
      submission: {
        action: async (field) => {
          this.register(field().value())
        },
        onInvalid: (field) => {
          // TODO
        },
      },
    },
  );

  register(data: RegisterData): void {
    this.authService.register(data).subscribe(console.log)
  }
}
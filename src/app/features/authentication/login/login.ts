import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

import { AuthService } from '../../../core/services/auth-service';

import { MaterialModule } from '../../../shared/material/material-module';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  // UI State Signals
  hidePassword = signal(true);
  isLoading = signal(false);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  togglePassword(event: MouseEvent) {
    event.stopPropagation();
    this.hidePassword.update(value => !value);
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.isLoading.set(true);
    const { email, password } = this.loginForm.value;

    this.authService.login({ email, password }).subscribe({
      next: (isSuccess) => {
        this.isLoading.set(false);
        if (isSuccess) {
          // Navigate to returnUrl (if user was redirected here by Guard) or default to home
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        }
      },
      error: () => {
        // Error handling is mostly done by ErrorInterceptor (SnackBar), 
        // but we ensure loading state is reset here.
        this.isLoading.set(false);
      }
    });
  }

  loginWithGoogle() {
    // The URL we want the backend to return us to after Google is done
    // Note: This must match the route we created in Step 3
    const returnUrl = `${window.location.origin}/account/callback`;

    // Redirect the browser to the .NET Backend endpoint
    window.location.href = `${environment.apiURL}/api/account/external-login?provider=Google&returnUrl=${returnUrl}`;
  }

}

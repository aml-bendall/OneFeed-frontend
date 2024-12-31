import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login(): Promise<void> {
    try {
      await this.authService.login(this.username, this.password).toPromise();
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      this.errorMessage = error.error?.message || 'Invalid username or password';
      console.error('Login failed', error);
    }
  }
}

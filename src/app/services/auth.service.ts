import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode'; // Correct import for jwt-decode
import { tap } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth'; // Update with your backend URL
  private tokenCheckInterval: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {}

  register(username: string, password: string, email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, password, email });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password }).pipe(
      tap((response: any) => {
        this.saveToken(response.token);
        this.startTokenExpiryCheck();
      })
    );
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.stopTokenExpiryCheck();
    this.router.navigate(['/login']);
    this.showToast('Logged out successfully.');
  }

  async showToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  private startTokenExpiryCheck(): void {
    if (this.tokenCheckInterval) {
      clearInterval(this.tokenCheckInterval);
    }

    this.tokenCheckInterval = setInterval(() => {
      if (this.isTokenExpired()) {
        this.logout();
      }
    }, 60000);
  }

  private stopTokenExpiryCheck(): void {
    if (this.tokenCheckInterval) {
      clearInterval(this.tokenCheckInterval);
      this.tokenCheckInterval = null;
    }
  }

  private isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) {
      return true;
    }
    const decoded: any = jwtDecode(token);
    return decoded.exp * 1000 < Date.now();
  }

  getLinkedFeeds(): Promise<{ name: string }[]> {
    return new Promise((resolve) => {
      resolve([
        { name: 'Facebook' },
        { name: 'Twitter' },
        { name: 'Instagram' },
      ]);
    });
  }
}

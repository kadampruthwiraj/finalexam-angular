import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  goToSuccessPage() {
    this.router.navigate(['/home']);
  }
 

  login( username: string,
    password: string) {
    var obj = new LoginRequestBean(username,password);
    this.authService.login(obj).subscribe(
      (response) => {
        // Handle successful login
        console.error('login successful:', response);
        AuthService.userId = username;
       this.goToSuccessPage();
      },
      (error) => {
        // Handle login error
        console.error('login failed:', error);
      }
    );
  }
}

class LoginRequestBean{
  loginId: string = '';
  password: string = '';

  constructor(loginId: string, password: string) {
    this.loginId = loginId;
    this.password = password;
  }

}

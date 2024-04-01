import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { SignUpRequestBean } from '../register/register.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name: string = '';

  email: string = '';
  phone: string = '';

  constructor(private router: Router, private authService: AuthService) { }
  

  ngOnInit() {
    if (AuthService.userId.length==0) {
        this.router.navigate(['/login']);
    }
    this.authService.getUserDetails(AuthService.userId).subscribe(
      (response:SignUpRequestBean) => {
        // Handle successful login
        console.error('login successful:', response);
        this.name = response.full_name;
        this.email = response.email;
        this.phone = response.phone_number;

        setTimeout(() => {   
          
            this.router.navigate(['/login']);
}, 60000);
      },
      (error) => {
        // Handle login error
        console.error('login failed:', error);
      }
    );


  }

  logut() {
    AuthService.userId = '';
  }
  }


class UserDetailsBean{
  username: string = '';
  constructor(username: string) {
    this.username = username;
  }
}
 

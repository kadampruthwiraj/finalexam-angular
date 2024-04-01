import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  gender: string = '';

  constructor(private authService: AuthService) {}

  register(name: string, email: string, password: string,username: string ,
    phone_number: string) {
    
    if (this.gender.length == 0)
    {
      alert("please select gender");
      return;
      }
    
    var obj: any = '';
    
      obj = new SignUpRequestBean(name, email, password, username, phone_number,this.gender);
   
    this.authService.register(obj).subscribe(
      (response) => {
        console.log('Registration successful:', response);
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }

onItemChangeMale(){
  
  this.gender = "Male";
}
  
onItemChangeFemale(){
  
  this.gender = "Female";
}
  
onItemChangeOther(){
   this.gender = "Prefer not to say";
}
}


export class SignUpRequestBean{
  id: number= 0;
  full_name: string = "";
   username: string = "";
  email: string = "";
  phone_number: string = "";
  password: string = "";
  gender: string = "";


  constructor(full_name: string, email: string, password: string,username: string ,
  phone_number: string ,
  gender: string )
  {
    this.full_name = full_name;
    this.email = email;
    this.password = password;
    this.username = username;
    this.phone_number = phone_number;
    this.gender = gender;

  }
}
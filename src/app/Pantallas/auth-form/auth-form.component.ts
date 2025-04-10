import { Component, OnInit } from '@angular/core';
import { LoginResponse } from '../../Models/LoginResponse';
import { AuthService } from '../../Service/auth.service';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-auth-form',
  imports: [FormsModule, InputTextModule, ButtonModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css'
})
export class AuthFormComponent implements OnInit{
  correo: string = '';
  password: string = '';
  
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    console.log("I am here");
  }


  
  // Método para manejar el inicio de sesión
  login() {
    this.authService.login(this.correo, this.password).subscribe(
      (response) => {
        console.log('Login exitoso', response);
        // Redirigir o hacer algo después del login
      },
      (error) => {
        console.error('Error en el login', error);
        // Manejar el error
      }
    );
  }
}

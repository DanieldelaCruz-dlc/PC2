import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Imc } from './imc/imc';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [CommonModule, FormsModule, HttpClientModule, Imc],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  
  estudiante = {
    codigoEstudiante: '',
    nombres: '',
    nota1: null,
    nota2: null,
    nota3: null,
    nota4: null
  };

  resultado: any = null;

  constructor(private http: HttpClient) {}

  enviarDatos() {
    this.http.post('https://ominous-goggles-x5xx9964gx4p2g97-3000.app.github.dev/api/estudiantes', this.estudiante)
      .subscribe({
        next: (respuesta) => {
          this.resultado = respuesta;
        },
        error: (err) => {
          console.error('Hubo un error comunicándose con el servidor', err);
          alert('Error: Asegúrate de que el backend (Node.js) esté encendido.');
        }
      });
  }
}
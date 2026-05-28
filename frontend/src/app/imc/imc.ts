import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imc',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './imc.html',
  styleUrls: ['./imc.css']
})
export class Imc {
  
  usuario = {
    nombre: '',
    correo: '',
    peso: null,
    altura: null
  };

  resultadoImc: number | null = null;
  categoria: string = '';

  calcularIMC() {
    if (this.usuario.peso && this.usuario.altura) {
      const peso = this.usuario.peso;
      const altura = this.usuario.altura;
      
      this.resultadoImc = peso / (altura * altura);

      if (this.resultadoImc < 18.5) {
        this.categoria = 'Bajo de peso';
      } else if (this.resultadoImc >= 18.5 && this.resultadoImc <= 24.9) {
        this.categoria = 'Peso saludable';
      } else if (this.resultadoImc >= 25.0 && this.resultadoImc <= 29.9) {
        this.categoria = 'Sobrepeso';
      } else {
        this.categoria = 'Obesidad';
      }
    }
  }
}
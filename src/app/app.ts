import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title = 'Práctica DOM Angular';
  items: string[] = ['Elemento 1', 'Elemento 2'];
  inputText = '';
  
  // Propiedades reactivas para el estilo y contenido dinámico
  contentBackgroundColor = 'lightgreen';
  dynamicMessage = '';
  browser = '';

  ngOnInit(): void {
    // Detectar navegador y configurar estilos al inicializar
    this.browser = this.detectBrowser();
    this.contentBackgroundColor = this.browser === 'Chrome' ? 'lightblue' : 'lightgreen';
    this.dynamicMessage = ' (Modificado dinámicamente)';
  }

  addItem(): void {
    this.items.push(`Elemento ${this.items.length + 1}`);
  }

  detectBrowser(): string {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
      return 'Chrome';
    } else if (userAgent.includes('Firefox')) {
      return 'Firefox';
    } else if (userAgent.includes('Edg')) {
      return 'Edge';
    }
    return 'Otro';
  }
}

// Importaciones del núcleo de Angular y módulos necesarios
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Directivas comunes como ngIf, ngFor
import { FormsModule } from '@angular/forms';    // Necesario para usar ngModel (two-way binding)

/**
 * Componente principal de la aplicación.
 * 
 * Demuestra conceptos fundamentales de Angular:
 * - Data binding (interpolación, property binding, event binding, two-way binding)
 * - Manejo de listas dinámicas
 * - Detección del navegador del usuario
 * - Estilos dinámicos basados en condiciones
 */
@Component({
  selector: 'app-root',              // Etiqueta HTML para usar este componente: <app-root>
  standalone: true,                   // Componente independiente (no requiere NgModule)
  imports: [CommonModule, FormsModule], // Módulos que necesita el template
  templateUrl: './app.html',          // Archivo HTML del template
  styleUrls: ['./app.css']            // Archivo de estilos CSS
})
export class App implements OnInit {
  
  // ─────────────────────────────────────────────────────────────
  // PROPIEDADES DEL COMPONENTE
  // Estas propiedades se vinculan automáticamente con el template
  // ─────────────────────────────────────────────────────────────
  
  /** Título que se muestra en el encabezado de la página */
  title = 'Práctica DOM Angular';
  
  /** Lista de elementos que se renderiza dinámicamente en el template */
  items: string[] = ['Elemento 1', 'Elemento 2'];
  
  /** Texto del input, sincronizado con ngModel (two-way binding) */
  inputText = '';
  
  /** Color de fondo del div principal, cambia según el navegador */
  contentBackgroundColor = 'lightgreen';
  
  /** Mensaje que se añade dinámicamente al contenido */
  dynamicMessage = '';
  
  /** Nombre del navegador detectado */
  browser = '';

  // ─────────────────────────────────────────────────────────────
  // CICLO DE VIDA DEL COMPONENTE
  // ─────────────────────────────────────────────────────────────

  /**
   * ngOnInit se ejecuta una vez que Angular ha inicializado
   * todas las propiedades del componente.
   * 
   * Es el lugar ideal para:
   * - Configurar valores iniciales basados en lógica
   * - Hacer llamadas a servicios
   * - Suscribirse a observables
   */
  ngOnInit(): void {
    // Detectamos qué navegador está usando el usuario
    this.browser = this.detectBrowser();
    
    // Asignamos un color de fondo diferente según el navegador
    // Esto demuestra cómo cambiar estilos de forma reactiva
    this.contentBackgroundColor = this.browser === 'Chrome' ? 'lightblue' : 'lightgreen';
    
    // Añadimos un mensaje dinámico al contenido
    this.dynamicMessage = ' (Modificado dinámicamente)';
  }

  // ─────────────────────────────────────────────────────────────
  // MÉTODOS DEL COMPONENTE
  // ─────────────────────────────────────────────────────────────

  /**
   * Añade un nuevo elemento a la lista.
   * 
   * Se invoca desde el template con (click)="addItem()".
   * Al modificar el array, Angular detecta el cambio automáticamente
   * y actualiza la vista sin necesidad de manipular el DOM manualmente.
   */
  addItem(): void {
    const nuevoNumero = this.items.length + 1;
    this.items.push(`Elemento ${nuevoNumero}`);
  }

  /**
   * Detecta el navegador del usuario analizando el User Agent.
   * 
   * @returns Nombre del navegador: 'Chrome', 'Firefox', 'Edge' u 'Otro'
   * 
   * Nota: La detección por User Agent no es 100% fiable ya que
   * los navegadores pueden modificar esta cadena.
   */
  detectBrowser(): string {
    const userAgent = navigator.userAgent;
    
    // Chrome incluye 'Chrome' pero Edge también lo incluye, así que verificamos que no sea Edge
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

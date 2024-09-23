import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; // Importa o módulo de botão do Angular Material

@Component({
  selector: 'app-button', // Define o seletor para uso do componente
  standalone: true, // Indica que este componente pode ser usado independentemente de um módulo
  imports: [CommonModule, MatButtonModule], // Importa módulos necessários, como funcionalidades comuns e botão do Angular Material
  templateUrl: './button.component.html', // Template HTML do componente
  styleUrl: './button.component.css' // Estilos CSS do componente
})
export class ButtonComponent {

  // Declaração de propriedades recebidas pelo componente pai
  @Input() text: string = ''; // O texto que será exibido no botão
  @Input() color: string = ''; // A cor do botão que pode ser configurada externamente
  @Output() btnClick = new EventEmitter(); // Evento que será emitido ao clicar no botão

  // Método que emite o evento quando o botão é clicado
  onClick() {
    this.btnClick.emit(); // Emite o evento personalizado para o componente pai
  }
}

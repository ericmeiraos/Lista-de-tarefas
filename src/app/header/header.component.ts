import { Component } from '@angular/core';

@Component({
  selector: 'app-header', // Define o seletor para uso do componente
  standalone: true, // O componente pode ser usado independentemente em outros módulos
  imports: [], // Nenhum módulo importado, pois este componente não depende de outros
  templateUrl: './header.component.html', // Template HTML associado ao componente
  styleUrls: ['./header.component.css'] // Arquivo de estilos CSS associado ao componente
})
export class HeaderComponent {
  title: string = 'Tarefas'; // Propriedade que armazena o título do cabeçalho
}

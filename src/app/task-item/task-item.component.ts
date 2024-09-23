import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../../Tarefa'; // Importa o modelo de Tarefa
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Ícone 'X' da biblioteca FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Módulo de ícones do FontAwesome
import { CommonModule } from '@angular/common'; // Importação de funcionalidades comuns do Angular
import { MatCardModule } from '@angular/material/card'; // Módulo de cartões do Angular Material

@Component({
  selector: 'app-task-item', // Seletor do componente
  standalone: true, // Indica que o componente pode ser usado independentemente
  imports: [FontAwesomeModule, CommonModule, MatCardModule], // Módulos necessários para o funcionamento do componente
  templateUrl: './task-item.component.html', // Template associado ao componente
  styleUrls: ['./task-item.component.css'] // Estilos CSS associados ao componente (corrigido para 'styleUrls')
})
export class TaskItemComponent {
  @Input() tarefa!: Tarefa; // Propriedade recebida do componente pai (tarefa)
  @Output() onDeleteTask = new EventEmitter<Tarefa>(); // Evento emitido para deletar a tarefa
  @Output() onToggleConcluido = new EventEmitter<Tarefa>(); // Evento emitido para marcar tarefa como concluída/incompleta

  faTimes = faTimes; // Associa o ícone 'X' à propriedade faTimes para uso no template

  // Método chamado quando o usuário clica no botão de deletar
  onDelete(tarefa: Tarefa) {
    this.onDeleteTask.emit(tarefa); // Emite o evento com a tarefa a ser deletada
  }

  // Método chamado quando o usuário marca/desmarca uma tarefa como concluída
  onToggle(tarefa: Tarefa) {
    this.onToggleConcluido.emit(tarefa); // Emite o evento para alternar o status de conclusão da tarefa
  }
}

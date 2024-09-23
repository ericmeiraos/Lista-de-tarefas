import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importação do módulo de formulários
import { Tarefa } from '../../Tarefa'; // Importação do modelo 'Tarefa'
import { ButtonComponent } from '../button/button.component'; // Componente personalizado de botão
import { CommonModule } from '@angular/common'; // Importação de funcionalidades comuns do Angular
import { MatFormFieldModule } from '@angular/material/form-field'; // Componente de campo de formulário do Angular Material
import { MatInputModule } from '@angular/material/input'; // Componente de entrada de texto do Angular Material
import { MatSelectModule } from '@angular/material/select'; // Componente de seleção do Angular Material
import { MatButtonModule } from '@angular/material/button'; // Componente de botão do Angular Material

@Component({
  selector: 'app-add-task', // Define o seletor do componente
  standalone: true, // O componente pode ser usado independentemente em outras partes da aplicação
  imports: [
    FormsModule, // Módulo de formulários necessário para o binding dos campos
    ButtonComponent, // Componente personalizado que será utilizado
    CommonModule, // Módulo comum para funcionalidades básicas
    MatFormFieldModule, // Módulo para campos de formulário estilizados
    MatInputModule, // Módulo para inputs do Angular Material
    MatSelectModule, // Módulo para dropdown de seleção
    MatButtonModule // Módulo para botões estilizados
  ],
  templateUrl: './add-task.component.html', // Template associado ao componente
  styleUrls: ['./add-task.component.css'] // Estilos CSS associados ao componente
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Tarefa>(); // Emite um evento quando uma nova tarefa é adicionada

  // Definição das propriedades do componente
  titulo: string = '';
  subtitulo: string = '';
  descricao: string = '';
  tarefa: string = ''; 
  categoria: string = ''; 
  concluido: boolean = false;
  mostrarAddTarefa: boolean = false;

  // Método para alterar a visualização do formulário de tarefa
  AlteraVisualizacao(valor: boolean) {
    this.mostrarAddTarefa = valor;
  }

  // Método que lida com a submissão do formulário
  onSubmit() {
    if (!this.titulo) {
      alert('Adicione um título!'); // Verificação de título vazio
      return;
    }

    // Criação de um novo objeto de tarefa
    const novaTarefa: Tarefa = {
      id: Date.now(), // Gera um ID baseado no timestamp atual
      titulo: this.titulo,
      subtitulo: this.subtitulo,
      descricao: this.descricao,
      concluido: this.concluido
    };

    this.onAddTask.emit(novaTarefa); // Emite o evento com a nova tarefa

    // Reseta os campos após a submissão
    this.titulo = '';
    this.subtitulo = '';
    this.descricao = '';
    this.tarefa = ''; 
    this.categoria = ''; 
    this.concluido = true;
  }
}

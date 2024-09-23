import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service'; // Importa o serviço de tarefas
import { Tarefa } from '../../Tarefa'; // Importa o modelo de Tarefa
import { CommonModule } from '@angular/common'; // Importa funcionalidades comuns do Angular
import { TaskItemComponent } from '../task-item/task-item.component'; // Importa o componente de item de tarefa
import { AddTaskComponent } from '../add-task/add-task.component'; // Importa o componente de adicionar tarefa

@Component({
  selector: 'app-tasks', // Seletor do componente
  standalone: true, // Componente independente
  imports: [CommonModule, TaskItemComponent, AddTaskComponent], // Módulos e componentes necessários
  templateUrl: './tasks.component.html', // Template associado ao componente
  styleUrls: ['./tasks.component.css'] // Estilos CSS associados ao componente
})
export class TasksComponent implements OnInit {

  tarefas: Tarefa[] = []; // Array para armazenar as tarefas

  constructor(private taskService: TaskService) {} // Injeta o serviço de tarefas no construtor

  ngOnInit(): void { // Método chamado após a inicialização do componente
    this.taskService.getTasks().subscribe((dado) => { // Chama o serviço para obter as tarefas
      this.tarefas = dado; // Armazena as tarefas recebidas no array
      console.log(dado); // Exibe as tarefas no console
    });
  }

  // Método para adicionar uma nova tarefa
  addTask(tarefa: Tarefa): void {
    this.taskService.addTask(tarefa).subscribe((novaTarefa) => { // Chama o serviço para adicionar a tarefa
      this.tarefas.push(novaTarefa); // Adiciona a nova tarefa ao array
    });
  }

  // Método para deletar uma tarefa
  deleteTask(tarefa: Tarefa): void {
    this.taskService.deleteTask(tarefa).subscribe(() => { // Chama o serviço para deletar a tarefa
      this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id); // Remove a tarefa deletada do array
    });
  }

  // Método para alternar o status de conclusão da tarefa
  toggleConcluido(tarefa: Tarefa): void { 
    tarefa.concluido = !tarefa.concluido; // Alterna o status de conclusão
    this.taskService.updateTask(tarefa).subscribe(); // Chama o serviço para atualizar a tarefa
  }
}

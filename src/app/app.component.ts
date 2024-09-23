import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importa o módulo de roteamento
import { HeaderComponent } from './header/header.component'; // Importa o componente de cabeçalho
import { TasksComponent } from './tasks/tasks.component'; // Importa o componente que gerencia as tarefas
import { AddTaskComponent } from './add-task/add-task.component'; // Importa o componente para adicionar tarefas

@Component({
  selector: 'app-root', // Seletor do componente raiz da aplicação
  standalone: true, // Indica que o componente é independente
  imports: [RouterOutlet, HeaderComponent, TasksComponent, AddTaskComponent], // Lista de módulos e componentes utilizados
  templateUrl: './app.component.html', // Template associado ao componente
  styleUrls: ['./app.component.css'] // Estilos CSS associados ao componente (corrigido para 'styleUrls')
})
export class AppComponent {
  title = 'lista de tarefas'; // Título da aplicação
}

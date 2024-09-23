import { HttpClient } from '@angular/common/http'; // Módulo para realizar requisições HTTP
import { Injectable } from '@angular/core'; // Decorador para declarar um serviço
import { Observable } from 'rxjs'; // Importa o tipo Observable para lidar com dados assíncronos
import { Tarefa } from '../../Tarefa'; // Importa o modelo de Tarefa

@Injectable({
  providedIn: 'root' // O serviço será injetado na raiz da aplicação, tornando-o disponível em qualquer parte do app
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/tasks'; // URL da API local para as tarefas

  constructor(private http: HttpClient) { } // Injeta o HttpClient para fazer requisições HTTP

  // Método para obter todas as tarefas
  getTasks() : Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl); // Faz uma requisição GET para obter todas as tarefas
  }

  // Método para deletar uma tarefa
  deleteTask(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.delete<Tarefa>(`${this.apiUrl}/${tarefa.id}`); // Faz uma requisição DELETE para remover uma tarefa específica
  }

  // Método para atualizar uma tarefa existente
  updateTask(tarefa: Tarefa) : Observable<Tarefa> {
    return this.http.put<Tarefa>(`${this.apiUrl}/${tarefa.id}`, tarefa); // Faz uma requisição PUT para atualizar a tarefa com o ID especificado
  }

  // Método para adicionar uma nova tarefa
  addTask(tarefa: Tarefa) : Observable<Tarefa> {
    return this.http.post<Tarefa>(`${this.apiUrl}`, tarefa); // Faz uma requisição POST para criar uma nova tarefa
  }
}

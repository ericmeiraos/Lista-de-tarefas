import { NgModule } from '@angular/core'; // Importa o decorador NgModule para definir um módulo
import { BrowserModule } from '@angular/platform-browser'; // Importa o módulo do navegador
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // Importa funções para configurar o cliente HTTP
import { HeaderComponent } from './header/header.component'; // Importa o componente de cabeçalho
import { AddTaskComponent } from './add-task/add-task.component'; // Importa o componente para adicionar tarefas
import { TasksComponent } from './tasks/tasks.component'; // Importa o componente que gerencia as tarefas

@NgModule({
  imports: [
    BrowserModule, // Adiciona o módulo do navegador às dependências do aplicativo
    HeaderComponent, // Inclui o componente de cabeçalho
    AddTaskComponent, // Inclui o componente para adicionar tarefas
    TasksComponent, // Inclui o componente que gerencia as tarefas
  ],
  providers: [
    // Configura o cliente HTTP com interceptores
    provideHttpClient(withInterceptorsFromDi()) 
  ],
})
export class AppModule { } // Define a classe do módulo da aplicação

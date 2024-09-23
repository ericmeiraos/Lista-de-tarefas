import { bootstrapApplication } from '@angular/platform-browser'; // Função para inicializar a aplicação
import { AppComponent } from './app/app.component'; // Importa o componente raiz da aplicação
import { importProvidersFrom } from '@angular/core'; // Função para importar provedores
import { FormsModule } from '@angular/forms'; // Importa o módulo para formulários
import { MatFormFieldModule } from '@angular/material/form-field'; // Importa o módulo para campos de formulário do Angular Material
import { MatInputModule } from '@angular/material/input'; // Importa o módulo para inputs do Angular Material
import { MatSelectModule } from '@angular/material/select'; // Importa o módulo para selects do Angular Material
import { MatButtonModule } from '@angular/material/button'; // Importa o módulo para botões do Angular Material
import { HttpClientModule } from '@angular/common/http'; // Importa o módulo para requisições HTTP

// Inicializa a aplicação com o AppComponent como componente raiz
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      FormsModule, // Adiciona o módulo de formulários
      MatFormFieldModule, // Adiciona o módulo de campos de formulário
      MatInputModule, // Adiciona o módulo de inputs
      MatSelectModule, // Adiciona o módulo de selects
      HttpClientModule, // Adiciona o módulo de requisições HTTP
      MatButtonModule // Adiciona o módulo de botões
    )
  ]
}).catch(err => console.error(err)); // Captura e loga qualquer erro durante a inicialização

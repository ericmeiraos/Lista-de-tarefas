import { mergeApplicationConfig, ApplicationConfig } from '@angular/core'; // Importa funções e tipos necessários para configuração da aplicação
import { provideServerRendering } from '@angular/platform-server'; // Importa a função para habilitar a renderização do lado do servidor
import { appConfig } from './app.config'; // Importa a configuração da aplicação

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering() // Adiciona o provedor para renderização no servidor
  ]
};

// Mescla a configuração da aplicação com a configuração do servidor
export const config = mergeApplicationConfig(appConfig, serverConfig);

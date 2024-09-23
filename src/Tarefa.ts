export interface Tarefa {
  id: number; // Identificador único da tarefa
  titulo: string; // Título da tarefa
  subtitulo: string; // Subtítulo opcional da tarefa
  descricao: string; // Descrição detalhada da tarefa
  concluido: boolean; // Status que indica se a tarefa foi concluída
}

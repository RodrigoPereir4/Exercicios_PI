import './App.css';
import React, { useState } from 'react';

function App() {
 // Teste Estado para armazenar as tarefas
 const [tarefas, setTarefas] = useState([]);
 const [novaTarefa, setNovaTarefa] = useState('');

 // Teste  Função para adicionar uma nova tarefa
 const adicionarTarefa = () => {
   if (novaTarefa.trim() !== '') {
     setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
     setNovaTarefa('');
   }
 };

 // TESTEFunção para marcar tarefa como concluída
 const marcarComoConcluida = (index) => {
   const novasTarefas = [...tarefas];
   novasTarefas[index].concluida = !novasTarefas[index].concluida;
   setTarefas(novasTarefas);
 };

 // TESTEFunção para remover uma tarefa
 const removerTarefa = (index) => {
   const novasTarefas = tarefas.filter((_, i) => i !== index);
   setTarefas(novasTarefas);
 };

 return (
   <div className="App">
     <h1>Lista de Tarefas</h1>
     <input 
       type="text" 
       value={novaTarefa} 
       onChange={(e) => setNovaTarefa(e.target.value)} 
       placeholder="Digite uma nova tarefa" 
     />
     <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
     
     <ul>
       {tarefas.map((tarefa, index) => (
         <li key={index} style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
           <input 
             type="checkbox" 
             checked={tarefa.concluida} 
             onChange={() => marcarComoConcluida(index)} 
           />
           {tarefa.texto}
           <button onClick={() => removerTarefa(index)}>Remover</button>
         </li>
       ))}
     </ul>
   </div>
 );
}

export default App;

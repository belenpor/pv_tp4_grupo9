import { useState } from 'react'
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput'
import './App.css'

function App() {
 
      const [tasks, setTasks] = useState([]);

      const addTask = (text) => {
        const newTask = { id: Date.now(), text, completed: false};
        setTasks([...tasks, newTask]);
      };
      const toggleTask = (id) => {
        setTasks(tasks.map(task => 
          task.id === id ? {...task, completed: !task.completed}:task
        ));
      };
      const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
      };

  return (

    <div style={{
      maxWidth: "600px",
      margin: "40px auto",
      padding: "20px",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    }}
    >

    <h1 style={{ frontSize: "28px", frontWeight: "bold" }}>Lista de Tareas</h1>
      <TaskInput onAddTask={addTask}/>
      <TaskList tasks={tasks}
      onToggle={toggleTask} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
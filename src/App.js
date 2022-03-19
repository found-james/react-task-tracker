import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doc appt',
        day: 'feb. 5',
        reminder: true
    },
    {
        id: 2,
        text: 'Meet at school',
        day: 'feb. 6',
        reminder: true
    }
])
// add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }


// delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}
// toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => task.id === id ? 
        {...task, reminder: !task.reminder } : task
                       )
            )
}
  return (
    <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} 
                 erase={deleteTask}
                 onToggle={toggleReminder}/>
        ) : (
          <h2>no tasks to do</h2>
        )
        }
    </div>
  );
}

export default App;

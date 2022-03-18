import { useState } from 'react'
import Header from './components/Header'
import Task from './components/Task'
import Tasks from './components/Tasks'


const App = () => {
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

// delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}
  return (
    <div className="container">
        <Header />
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} 
                 erase={deleteTask}/>
        ) : (
          <h2>no tasks to do</h2>
        )
        }
    </div>
  );
}

export default App;

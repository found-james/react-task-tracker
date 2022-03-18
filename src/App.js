import { useState } from 'react'
import Header from './components/Header'
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
  return (
    <div className="container">
        <Header />
        <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;

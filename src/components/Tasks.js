import Task from './Task' 

const Tasks = ({ tasks, erase, onToggle }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} 
                      task={task} 
                      erase={erase}
                      onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks
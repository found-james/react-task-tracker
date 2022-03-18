import Task from './Task' 

const Tasks = ({ tasks, erase }) => {
    
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} erase={erase}/>
            ))}
        </>
    )
}

export default Tasks
import useTaskStore from "../store/tasksStore";
import TodoItem from "./TodoLists";
import "./todo.css"

function TodoLists() {
     const tasks=useTaskStore(function(state){
        return state.tasks
    })
    return ( 
        <section className="todo-items-section-c">
{
    tasks.map((task)=><TodoItem title={task.title} description={task.description} complete={task.complete } key={task.id} id={task.id}  />)
}
        </section>
     );
}

export default TodoLists;
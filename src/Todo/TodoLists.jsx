import useTaskStore from "../Store/Store";
import TodoList from "./TodoLists";
import "./todo.css"

function TodoLists() {
     const tasks=useTaskStore(function(state){
        return state.tasks
    })
    return ( 
        <section className="todo-items-section-c">
{
    tasks.map((task)=><TodoList title={task.title} description={task.description} complete={task.complete } key={task.id} id={task.id}  />)
}
        </section>
     );
}

export default TodoLists;
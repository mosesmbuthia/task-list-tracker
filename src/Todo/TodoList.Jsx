import {useState} from'react';
import { CiEdit,CiStar  } from "react-icons/ci";
import useTaskStore from "../store/tasksStore";
import "./todo.css";

function TodoList({title, description,complete,id}) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const[favourite,setFavourite]=useState(false)

  const markAsCompleted=  useTaskStore(function(state){
        return state.markComplete
    })
   const markAsIncomplete= useTaskStore(function(state){
        return state.markIncomplete
    })
    const deleteTask= useTaskStore(function(state){
        return state.deleteTask
     })
     const editTask=useTaskStore(function(state){
        return state.editTask
     })
    const AddToFavourites=  useTaskStore(function(state){
        return state.addToFavorites
     })
     
    function handleMarkIncomplete(){
        markAsIncomplete(id)
    }
    function handleMarkComplete(){
        markAsCompleted(id)
    }
    function handleDeleteTask(){
        deleteTask(id)
    }
    function handleEdit(e){
        e.preventDefault()
        if (newTitle && newDescription) {
            editTask({ id, title: newTitle, description: newDescription });
            setIsEditing(false); 
          }
    }

    function handleAddToFavourites(){
     setFavourite(true)
    }
    return ( 
        <><div className="todo-item-container">

            <div className="text-container">
                <div className="svg-icons"> <CiStar onClick={handleAddToFavourites} color={favourite?'gold':'black'}/> <CiEdit onClick={() => setIsEditing(!isEditing)} /> </div>
            
            </div>
            {isEditing ? (
                <div className='edit-mode'>
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="Edit Title" />
                    <textarea
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        placeholder="Edit Description" />
                    <button onClick={handleEdit}>Save Changes</button>
                </div>
            ) : (
                <>
                    <h1 className={complete ? 'task-title complete' : 'task-title'}>
                        {newTitle}
                    </h1>
                    <p className={complete ? 'complete' : ''}>
                        {newDescription}
                    </p>
                </>
            )}
            <div className="todo-input-controls">
                <button className="control-input" onClick={complete ? handleMarkIncomplete : handleMarkComplete}>{complete ? "Mark as incomplete" : "Mark as complete"} </button>
                <button className="control-delete" onClick={handleDeleteTask}>Delete </button>
            </div>
        </div>
            </>
    )
}

export default TodoList;
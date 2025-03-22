
import {create} from 'zustand'
import{devtools,persist}from 'zustand/middleware'

function taskStore(set){
return{
    tasks:[],
addTask:function(newTask){
set(function(previousState){
    return{tasks:[newTask,...previousState.tasks]}
})
},
markComplete:function(taskId){
    set(function(previousState){
const updatedTask=previousState.tasks.map(function(task){
    if(task.id===taskId){
        task.complete=true
    }
    return task;
})
return{tasks:updatedTask}
    })
},
markIncomplete:function(taskId){
set(function(previousState){
   const updatedTask= previousState.tasks.map(function(task){
        if(task.id===taskId){
            task.complete=false
        }
        return task
    })
    return{tasks:updatedTask}
})
},
editTask: function(taskId, updatedData) {
    set(function(previousState) {
        const updatedTasks = previousState.tasks.map(function(task) {
        if (task.id === taskId) {
return { ...task, ...updatedData };
    }
return task;
});
return { tasks: updatedTasks };
    });
},

deleteTask:function(taskId){
    set(function(previousState){
 const remainingTask=  previousState.tasks.filter(function(task){
            return task.id!==taskId
        })
        return {tasks:remainingTask}
    })
},
addToFavorites:function(taskId){
set(function(previousState){
const UpdatedTask=  previousState.tasks.map(function(task){
    if(task.id==taskId){
        task.favourite = !task.favourite; 
        return task;
    }
  })
  return {tasks:UpdatedTask}
})
}
}
}

const useTaskStore= create(devtools(persist(taskStore,{name:"Task-tracker-app"})))
export default useTaskStore;
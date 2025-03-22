import useTaskStore from "../Store/Store";
import timeNow from "../assets/Utilities/now";
import TodoInput from "./TodoInput";
import "./Hero.css";
function Hero() {
    const tasks=useTaskStore(state=>state.tasks)
    let numberOfInCompleteTasks=0;
    tasks.forEach(task => {
        if(task.complete==false)numberOfInCompleteTasks++
    });
    return ( 
    <section className="hero-section-container">
 <h1> Good {timeNow()} Moses</h1>
 <h3>You have {numberOfInCompleteTasks} tasks left today</h3>
 <TodoInput/>
    </section> );
}

export default Hero;
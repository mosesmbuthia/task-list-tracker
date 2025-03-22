import useTaskStore from "../Store/Store.js";
import timeNow from "../Utilities/now.js";
import TodoInput from "./TodoInput.jsx";
import "./Hero.css";

function Hero() {
    const tasks = useTaskStore((state) => state.tasks) || [];
    let numberOfInCompleteTasks = tasks.filter((task) => !task.complete).length;

    return (
        <section className="hero-section-container">
            <h1>Good {timeNow()} Moses</h1>
            <h3>You have {numberOfInCompleteTasks} tasks left today</h3>
            <TodoInput />
        </section>
    );
}

export default Hero;

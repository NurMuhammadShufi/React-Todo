import { useState } from "react";
import Header from "./components/Header";
import { Tasks } from "./components/Tasks";

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskTitle) => {
        setTasks([
            ...tasks,
            {
                id: crypto.randomUUID(),
                title: taskTitle,
                isCompleted: false,
            },
        ]);
    };

    const deleteTaskById = (taskId) => {
        const newTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(newTasks);
    };

    const toggleTaskCompletedById = (taskId) => {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted,
                };
            }
            return task;
        });
        setTasks(newTasks);
    };

    return (
        <>
            <Header onAddTask={addTask} />
            <Tasks tasks={tasks} onComplete={toggleTaskCompletedById} onDelete={deleteTaskById} />
        </>
    );
};

export default App;

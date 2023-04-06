import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Tasks } from "./components/Tasks";

const LOCAL_STORAGE_KEY = "todo:savedtasks";

const App = () => {
    const [tasks, setTasks] = useState([]);

    const loadSaveTasks = () => {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (saved) {
            setTasks(JSON.parse(saved));
        }
    };

    useEffect(() => {
        loadSaveTasks();
    }, []);

    const setTasksAndSave = (newTasks) => {
        setTasks(newTasks);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
    };

    const addTask = (taskTitle) => {
        setTasksAndSave([
            ...tasks,
            {
                id: crypto.randomUUID(),
                title: taskTitle,
                isCompleted: false,
            },
        ]);
    };

    // const setTasksAndSave = (newTasks) => {
    //     setTasks(newTasks);
    //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
    // };

    const deleteTaskById = (taskId) => {
        const newTasks = tasks.filter((task) => task.id !== taskId);
        setTasksAndSave(newTasks);
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
        setTasksAndSave(newTasks);
    };

    return (
        <>
            <Header onAddTask={addTask} />
            <Tasks tasks={tasks} onComplete={toggleTaskCompletedById} onDelete={deleteTaskById} />
        </>
    );
};

export default App;

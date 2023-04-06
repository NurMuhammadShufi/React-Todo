import styles from "./header.module.css";
import todoLogo from "../../assets/todoLogo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";

const Header = ({ onAddTask }) => {
    const [title, setTitle] = useState("");

    const handleSumbit = (event) => {
        event.preventDefault();
        onAddTask(title);
        setTitle("");
    };

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    return (
        <header className={styles.header}>
            <img src={todoLogo} />

            <form onSubmit={handleSumbit} className={styles.newTaskForm}>
                <input type="text" placeholder="add a new task" value={title} onChange={onChangeTitle} />
                <button>
                    Create <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    );
};

export default Header;

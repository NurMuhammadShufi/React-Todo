import styles from "../Task/task.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Task = ({ task, onComplete, onDelete }) => {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </button>

            <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>
            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <TbTrash size={20} />
            </button>
        </div>
    );
};

export default Task;

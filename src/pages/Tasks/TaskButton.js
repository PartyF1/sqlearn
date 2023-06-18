import { useState } from "react";
import "./Tasks.scss"

export default function TaskButton(props) {
    const { setPage, setTask, task } = props;
    const [openPage, setOpenPage] = useState(false);

    const toTask = () => {
        setTask(task);
        setPage("task");
    }

    const openTask = () => {
        setOpenPage(!openPage)
    }

    return (
        <div>
            <button className="taskButton" onClick={() => openTask()}> Задание {task.id}. {task.name}.</button>
            <div className={openPage ? "openPage" : "closedPage"}>
                <fieldset className="taskInfo">{task.info}
                    <button onClick={() => toTask()}>Начать</button>
                </fieldset>
            </div>
        </div>

    )
}
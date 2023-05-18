import { useState } from "react";
import "./Tasks.scss"

export default function TaskButton(props) {
    const { setPage } = props;
    const { setInfo } = props;
    const { taskInfo } = props;
    const [openPage, setOpenPage] = useState(false);

    const toTask = () => {
        setInfo(taskInfo);
        setPage("task");
    }

    const openTask = () => {
        setOpenPage(!openPage)
    }

    return (
        <div>
            <button className="taskButton" onClick={() => openTask()}> Задание {taskInfo.taskId}</button>
            <div className={openPage ? "openPage" : "closedPage"}>
                <fieldset className="taskInfo">{taskInfo.text}
                    <button onClick={() => toTask()}>Начать</button>
                </fieldset>
            </div>
        </div>

    )
}
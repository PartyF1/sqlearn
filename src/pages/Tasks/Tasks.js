import TaskButton from "./TaskButton";
import { useState } from "react";
import "./Tasks.scss"
let taskList = [];

export default function Tasks(props) {
    const [state, setState] = useState("preload");
    const { setPage } = props;
    const { setTask } = props;
    const { server } = props;

    async function getTasks() {
        const tempList = await server.getTasks();
        if (tempList != taskList) {
            taskList = tempList;
            setState("complete");
        }
    }
    getTasks();

    return (
        <div className="taskList">
            {taskList.map((task) => {
                return (
                    <TaskButton setPage={setPage} key={task.id} task={task} setTask={setTask}></TaskButton>
                )
            })}
        </div>
    )

}
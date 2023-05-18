import TaskButton from "./TaskButton";
import "./Tasks.scss"

export default function Tasks(props) {
    const { setPage } = props;
    const { setInfo } = props;
    const { server } = props;


    const taskList = [{ taskId: 1, text: "Вывести имена всех людей, которые есть в базе данных авиакомпаний" },
                    {taskId: 2, text:  "Вывести имена всех людей, которые есть в базе данных авиакомпаний"},
                    {taskId: 3, text:  "Вывести имена всех людей, которые есть в базе данных авиакомпаний"},
                    {taskId: 4, text:  "Вывести имена всех людей, которые есть в базе данных авиакомпаний"}];
    return (
        <div className="taskList">
            {taskList.map((task) => {
                return (
                    <TaskButton setPage={setPage} taskInfo={task} key={task.taskId} setInfo={setInfo}></TaskButton>
                )
            })}
        </div>
    )
}
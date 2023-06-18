import { useRef, useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';
import "./Task.scss"


export default function Task(props) {
    const { setPage, task, server } = props;
    const query = useRef();
    const [answer, setAnswer] = useState("Ваши результаты здесь");

    const [code, setCode] = useState("");

    const sendSolution = async () => {
        try {
            const a = await server.sendSolution(task.id, query.current.value);
            setAnswer(a);
        } catch (e) {
            console.log("Ошибка")
        }

    }

    return (
        <div className="kk">
            <div>
                <fieldset className="infoText">{task.info}</fieldset>
                <fieldset className="request">{answer}</fieldset>
            </div>
            <fieldset className="solutionArea">
                <CodeEditor
                    value={code}
                    language="sql"
                    placeholder="Вводить здесь..."
                    onChange={(evn) => setCode(evn.target.value)}
                    padding={15}
                    style={{
                        fontSize: 15,
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }}
                    ref={query}
                    className="solution"
                />
                <button onClick={setPage} className="close">Завершить</button>
                <button onClick={sendSolution} className="send">Тест</button>
            </fieldset>

        </div>
    )
}
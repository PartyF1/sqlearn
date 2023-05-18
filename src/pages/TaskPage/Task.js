import { useRef, useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';
import "./Task.scss"


export default function Task(props) {
    const { setPage } = props;
    const { info } = props;
    const { server } = props;
    const query = useRef();
    const [answer, setAnswer] = useState("");

    const [code, setCode] = useState("");

    const sendSolution = () => {
        try {
            const a = server.sendSolution(info.taskId, query.current.value);
            console.log(a);
            setAnswer(a);
        } catch (e) {
            console.log("насрал ошибку")
        }

    }

    return (
        <div className="kk">
            <div>
                <fieldset className="infoText">{info.text}</fieldset>
                <fieldset className="request">{answer ? answer : "Здесь будет ответ"}</fieldset>
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
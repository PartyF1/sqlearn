import "./Header.css";

export default function Header(page, user) {
    return (
        <div className="header">
            <button className="headerPage">Главная</button>
            <button сlassName="headerPage">Задания</button>
            {user? <button className="userIcon"></button>:
                <div> 
                    <button className="authorisation">Войти</button>
                    <button className="registration">Зарегестрироваться</button>
                </div>  
            }
        </div>
    )
}
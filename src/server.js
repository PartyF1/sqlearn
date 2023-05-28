

export default class Server {
    async send(params = {}) {
        const query = Object.keys(params)
          .map((key) => `${key}=${params[key]}`)
          .join('&');
        const result = await fetch(`http://sqlearn/api/?${query}`);
        const answer = await result?.json();
        return answer.result === 'ok' ? answer.data : null;
    }

    async getTasks() {
        return await this.send({method: "getTasks"});
    }

    async sendSolution(taskId, solution) {
        const answer = await this.send({method: "sendSolution", taskId: taskId, solution: solution});
        return answer? answer : "Ошибка";
    } 
}
export interface IChatting {
    name: string;
    message: string;
}
export class Chatting implements IChatting {
    name: string;
    message: string;
    constructor(name: string, message: string) {
        this.name = name;
        this.message = message;
    }
}
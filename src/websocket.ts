import { WebSocketServer } from 'ws';
import { Chatting } from './impl/chatting';

const wsServer = new WebSocketServer({ port: 3001 });

let chattingList: Chatting[] = [
    new Chatting('Server', 'Welcome to the server!')
];

wsServer.on('connection', (ws) => {

    ws.send(
        JSON.stringify(
            chattingList
        ),
    );
    ws.on('message', (rawData) => {
        const message = rawData.toString();
        const chatting = JSON.parse(message);
        if(chatting.name === null || chatting.message === null) {
            return;
        }
        chattingList.push(chatting as Chatting);
        console.log('Received:',chatting);
        wsServer.clients.forEach((client) => {
            if(client.readyState === 1) {
                client.send(JSON.stringify([chatting]));
            }
        });
    });
});

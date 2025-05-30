const WebSocket = require('ws');
const { Messages } = require('./DashboardData/Messages');
const { UserData } = require('./DashboardData/UserData');
const { EarnedNGN } = require('./HomeData/EarnedNGN');
const { EarnedData } = require('./HomeData/EarningData');
const { Errors } = require('./HomeData/Errors');
const { SucessRatio } = require('./HomeData/SucessRatio');

const ws = new WebSocket.Server({ port: 8080 });

ws.on('connection', (Socket) => {
    console.log("✅ WebSocket Connected");

    const requestedData = {
        "messages": () => Socket.send(JSON.stringify({ type: "messages", payload: Messages })),
        "userData": () => Socket.send(JSON.stringify({ type: "userData", payload: UserData })),
        "earnedNGN": () => Socket.send(JSON.stringify({ type: "EarnedNGN", payload: EarnedNGN })),
        "earnedData": () => Socket.send(JSON.stringify({ type: "EarnedData", payload: EarnedData })),
        "errors": () => Socket.send(JSON.stringify({ type: "Errors", payload: Errors })),
        "sucessRatio": () => Socket.send(JSON.stringify({ type: "SucessRatio", payload: SucessRatio })),
    };

    Socket.on('message', (message) => {
        const request = message.toString().trim();
        console.log("📩 Received from Client:", request);

        if (requestedData[request]) {
            console.log("start");
            requestedData[request]();
            console.log(request);
            console.log("end");
        } else {
            console.warn("⚠️ Unknown request:", request);
            Socket.send(JSON.stringify({
                type: "error",
                payload: { message: `Unknown data request: "${request}"` }
            }));
        }
    });

    Socket.on('close', () => {
        console.log("🔌 WebSocket Disconnected");
    });
});

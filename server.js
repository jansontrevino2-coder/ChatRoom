const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", ws => {
  ws.on("message", data => {
    // Broadcast message to everyone
    for (const client of wss.clients) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    }
  });
});

console.log("Chat server running on ws://localhost:8080");

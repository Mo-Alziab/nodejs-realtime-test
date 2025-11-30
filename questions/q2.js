/**
 * السؤال الثاني — WebSocket Broadcast + Memory Leak
 *
 * مشكلتان:
 * 1) broadcast لا يعمل مع الجميع
 * 2) Memory Leak بسبب عدم تنظيف الاتصالات
 *
 * المطلوب:
 * - إصلاح broadcast
 * - تنظيف الاتصالات عند disconnect
 * - إرسال الرسائل فقط للـ OPEN sockets
 * - إزالة setInterval الذي يسبب leak
 */

const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });
let clients = [];

wss.on("connection", (ws) => {

  clients.push(ws);

  ws.on("message", (msg) => {
    clients.forEach(client => {
      client.send(msg);  // sometimes crashes
    });
  });

  setInterval(() => {
    ws.send("ping");
  }, 1000);
});

// ✏️ اكتب الحل هنا

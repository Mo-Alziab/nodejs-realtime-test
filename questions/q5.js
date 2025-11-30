/**
 * السؤال الخامس — Rooms مع Socket.io
 *
 * مشاكل:
 * - تخزين يدوي غير آمن
 * - لا يوجد تنظيف للسوكيت
 * - خطأ إذا كانت الغرفة غير موجودة
 * - لا يتم استخدام socket.join()
 */

const rooms = {};

io.on("connection", socket => {
  socket.on("join", room => {
    if (!rooms[room]) rooms[room] = [];
    rooms[room].push(socket);
  });

  socket.on("msg", ({ room, message }) => {
    rooms[room].forEach(s => s.emit("msg", message));
  });
});

// ✏️ اكتب الحل هنا

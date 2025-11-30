# امتحان Node.js Realtime

## التعليمات العامة

- المدة المقترحة: 60–90 دقيقة.
- استخدم ملف `index.js` أو ملفات إضافية إذا احتجت (مثل `ws-server.js`، `services.js`، إلخ).
- المطلوب حل **6اسئلة**.
- في نهاية الامتحان:
  - تأكد أن الكود يعمل (قدر الإمكان).
  - اعمل:
    - `git add .`
    - `git commit -m "finished-test"`
  - **لا تعمل merge** إلى فرع `main`.

---

## السؤال الأول

هذا API لرفع موقع السائق،  
فيه 3 مشاكل (منطق + أمن + أداء).  
عدّل الكود ليصبح صحيح و performant و آمن.

```js
app.post("/update-location", async (req, res) => {
  const { driverId, lat, lng } = req.body;

  await db.query(
    `UPDATE drivers SET lat = ${lat}, lng = ${lng} WHERE id = '${driverId}'`
  );

  res.send("ok");
});

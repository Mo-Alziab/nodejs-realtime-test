/**
 * السؤال الرابع — تحديث سائق مع SQL Injection
 *
 * مشاكل:
 * - الاستعلام قابل للحقن
 * - لا تحقق من المدخلات
 * - لا يوجد error handling
 */

app.post("/update", async (req, res) => {
  const { id, lat, lng } = req.body;
  await db.query(`UPDATE drivers SET lat=${lat}, lng=${lng} WHERE id='${id}'`);
  res.send("ok");
});

// ✏️ اكتب الحل هنا

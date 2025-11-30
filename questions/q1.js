/**
 * السؤال الأول — تحديث موقع السائق
 *
 * يوجد 3 مشاكل في الكود:
 * 1) SQL Injection
 * 2) لا يوجد تحقق من المدخلات
 * 3) لا يوجد error handling
 *
 * المطلوب:
 * - إصلاح المشاكل الثلاثة
 * - تحسين الأداء والمنطق
 */

app.post("/update-location", async (req, res) => {
  const { driverId, lat, lng } = req.body;

  await db.query(
    `UPDATE drivers SET lat = ${lat}, lng = ${lng} WHERE id = '${driverId}'`
  );

  res.send("ok");
});

// ✏️ اكتب الحل هنا


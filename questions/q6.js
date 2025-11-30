/**
 * السؤال السادس — دالة Service مع مشاكل async
 *
 * مشاكل:
 * - لا يوجد await
 * - لا يوجد return
 * - SQL Injection
 */

async function getDriver(id) {
  try {
    db.query("SELECT * FROM drivers WHERE id=" + id)
      .then(res => {
        return res.rows[0];
      })
      .catch(err => console.log(err));
  } catch (e) {
    console.log("error");
  }
}

// ✏️ اكتب الحل هنا

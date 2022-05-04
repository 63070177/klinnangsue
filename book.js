router.post("/book/addBook", async function (req, res, next) {
    const title = req.body.bookname
    const description = req.body.text
    const unit = req.body.unit
    const price = req.body.price
    const isbn_num = req.body.isbn
    const pub_name = req.body.publisher
    const alias = req.body.authorname
    const frontpic = req.body.frontpic
    const backpic = req.body.backpic
    const barcode = req.body.barcode
    const typebook = req.body.typebook

    console.log(req.body)

  const [rows, field] = await pool.query(`SELECT * FROM PUBLISHER WHERE pub_name = ?`, [pub_name])
  const [rows1, field1] = await pool.query(`SELECT * FROM AUTHOR WHERE alias = ?`, [alias])
  const [rows2, field2] = await pool.query(`SELECT * FROM BOOK WHERE title = ?`, [title])
  const [rows3, field3] = await pool.query(`SELECT * FROM BOOK_TYPE WHERE name = ?`, [typebook])

  console.log(rows[0], rows1[0], rows3[0])

  const conn = await pool.getConnection()
  await conn.beginTransaction()

  try {
        if (rows.length != 0 && rows1.length != 0 && rows2.length == 0) {
          await conn.query(`INSERT INTO BOOK(title, description, unit, price, isbn_num, image_url1, image_url2, barcode, admin_id, pub_id) VALUES(?, ?, ?, ?, ?, ?, ?, ?, 1, ?)`, [title, description, unit, price, isbn_num, frontpic, backpic, barcode, rows[0].pub_id])
          console.log('1')
          conn.commit()
          console.log('committed')

          const [rows4, field4] = await conn.query(`SELECT * FROM BOOK WHERE title = ?`, [title])
          await conn.query(`INSERT INTO AUTHOR_BOOK VALUES(?, ?, ?)`, [rows4[0].book_id, rows1[0].author_id, 'writer'])
          console.log('2')
          await conn.query(`INSERT INTO BOOK_TYPE_BOOK VALUES(?, ?)`, [rows4[0].book_id, rows3[0].book_type_id])
          console.log('3')
          res.send('เพิ่มข้อมูลสำเร็จ')
          
        }
      } catch (error) {
        conn.rollback()
        console.log(error)
      } finally {
        conn.release()
      }

})

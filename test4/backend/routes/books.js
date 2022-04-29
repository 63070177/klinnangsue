const express = require("express");
const pool = require("../config");
const app = express()
const cors = require('cors');
const { router } = require("./user");

app.use(cors());

router = express.Router();

router.get("/books/:bookId",async function (req, res, next) {
    const bookId = req.params.bookId
    try {
        let query = `select *
        from BOOK
        join AUTHOR_BOOK
        using (book_id)
        join AUTHOR
        using (author_id)
        join BOOK_TYPE_BOOK
        using (book_id)
        join BOOK_TYPE
        using (book_type_id)
        join PUBLISHER
        using (pub_id)
        where book_id=?`
        const [rows, _] = await pool.query(query, [bookId]);
        res.send(rows)
      } catch (error) {
        return res.status(500).json(error)
        
      }
    })

exports.router = router;

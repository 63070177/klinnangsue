const express = require("express");
const pool = require("../config");
const app = express()
const cors = require('cors')

app.use(cors());

router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    let query = `select *
    from BOOK
    join AUTHOR_BOOK
    using (book_id)
    join AUTHOR
    using (author_id)`
    const [rows, _] = await pool.query(query);
    res.send(rows)
  } catch (error) {
    return res.status(500).json(error)
    
  }
    
});
  
exports.router = router;
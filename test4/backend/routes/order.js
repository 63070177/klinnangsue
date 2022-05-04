const express = require("express");
const pool = require("../config");
const app = express()
const cors = require('cors');
app.use(cors());

router = express.Router();

router.get("/order/:custId", async function (req, res, next) {
  const custId = req.params.custId
  console.log(custId)
  
  try {
      let query = `select *
      from CART where customer_id=?`
      const [rows, _] = await pool.query(query, [custId]);
      res.send(rows)
    } catch (error) {
      return res.status(500).json(error)
      
    }
})

router.get("/order/item/:custId", async function (req, res, next) {
  const custId = req.params.custId
  console.log(custId)
  
  try {
      let query = `SELECT *, unit_price*quantity price_sum
      FROM CART_ITEM
      JOIN CART c
      USING (cart_id)
      JOIN BOOK
      USING (book_id)
      WHERE customer_id = ?`
      const [rows, _] = await pool.query(query, [custId]);
      res.send(rows)
    } catch (error) {
      return res.status(500).json(error)
    }
})



router.delete('/order/delete/:custId', async function (req, res, next) {
  try {
      const [rows1, fields1] = await pool.query(
        `SET @custcart := (
          SELECT cart_id
          FROM CART
          WHERE customer_id = ?
          );
          
          DELETE FROM CART_ITEM WHERE cart_id = @custcart;
          DELETE FROM CART WHERE cart_id = @custcart
          `, [req.params.custId]
      )
      res.json("success")
  } catch (error) {
      res.status(500).json(error)
  }
});


exports.router = router


const express = require("express");
const pool = require("../config");
const Joi = require('joi')
const app = express()
const cors = require('cors');
app.use(cors());



router = express.Router();

const passwordValidator = async (value, helpers) => {
    const [rows, _] = await pool.query("SELECT password FROM USER WHERE password = ?", [value])
    if (rows.length > 0) {
        throw new Joi.ValidationError('This password is already taken!')
    }
    if (value.length < 8) {
        throw new Joi.ValidationError('Password must contain at least 8 characters')
    }
    return value
}

const usernameValidator = async (value, helpers) => {
    const [rows, _] = await pool.query("SELECT username FROM USER WHERE username = ?", [value])
    if (rows.length > 0) {
        throw new Joi.ValidationError('This username is already taken!')
    }
    return value
}

const emailValidator = async (value, helpers) => {
    const [rows, _] = await pool.query("SELECT email FROM USER WHERE email = ?", [value])
    if (rows.length > 0) {
        throw new Joi.ValidationError('This email is already taken!')
    }
    return value
}

router.get("/users", async function (req, res, next) {
    try {
        let query = `select *
        from USER`
        const [rows, _] = await pool.query(query);
        res.send(rows)
      } catch (error) {
        return res.status(500).json(error)
        
      }
})

router.post('/user/login',async function (req, res, next) {
    const username = req.body.username
    const password = req.body.password

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try {
        // Check if username is correct
        const [users] = await conn.query(
            'SELECT * FROM USER WHERE username=?', 
            [username]
        )
        const user = users[0]
        if (!user) {    
            throw new Error('Incorrect username or password')
        }

        // Check if password is correct
        const [passwords] = await conn.query('select password from USER where username=?', [username])
        const pasw = passwords[0]
        if (!pasw) {
            throw new Error('Incorrect username or password')
        }

        
        conn.commit()
        res.json(user)
     } catch (error) {
         conn.rollback()
         res.status(400).json(error.toString())
     } finally {
         conn.release()
     }


    })

router.post('/user/signup', async function (req, res, next) {
        const conn = await pool.getConnection()
        await conn.beginTransaction()

        const username = req.body.username
        const password = req.body.password
        const email= req.body.email
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const phone = req.body.phone
        passwordValidator(password)
        usernameValidator(username)
        emailValidator(email)

        try {
            await conn.query(`insert into USER(username, password, first_name, last_name, email, user_type, phone) values(?, ?, ?, ?, ?, 'customer', ?)`,
            [username, password, firstname, lastname, email, phone])
            conn.commit()
            res.send('successfully insert')
        } catch (error) {
            conn.rollback()
            res.status(400).json(error.toString())
        }finally{
            conn.release()
        }


})

router.put('/user/forgetPassword', async function (req, res, next) {
    const conn = await pool.getConnection()
    await conn.beginTransaction()

    const username = req.body.username
    const password = req.body.confirmpassword
    passwordValidator(password)

    try {
        await conn.query(`update USER set password = ? where username = ?`, [username, password])
        conn.commit()
        res.send('update succesful!')
    } catch (error) {
        conn.rollback()
        res.status(400).json(error.toString())
    }finally{
        conn.release()
    }

})

router.get("/users/:userId", async function (req, res, next) {
    const userId = req.params.userId
    console.log(userId)
    
    try {
        let query = `select *
        from USER where user_id=?`
        const [rows, _] = await pool.query(query, [userId]);
        res.send(rows)
      } catch (error) {
        return res.status(500).json(error)
        
      }
})
/*เอา username ใช้ประโยชน์ -> เอา username ไปใช้หา user_id แล้ว return ให้ detailProfile แล้วยิง axios อีกรอบเพื่อเอาข้อมูลแค่ของตัวเอง*/

exports.router = router
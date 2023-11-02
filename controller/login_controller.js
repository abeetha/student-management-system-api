const connection = require('../db/db-connection');

const getAllUsers = (req, res) => {
    connection.query('select * from userlogin where username=?', [req.body.username], (err, rows) => {
        if (err) throw err
        if (rows[0].password == req.body.password) {
            res.json("Login Success");
        } else {
            res.json("Login");
        }
    }
    )
}
const addUser = (req, res) => {
    connection.query('insert into userregister values(?,?,?,?,?)', [req.body.fullname, req.body.email, req.body.username, req.body.password, req.body.repeatpassword], (err, rows) => {
        if (err) throw err
        res.json(rows)
    })
}
module.exports = { getAllUsers, addUser }

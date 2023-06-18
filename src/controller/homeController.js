import pool from '../configs/connectDB.js';

let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM user');

    return res.render('index.ejs', {dataUser: rows})
}

let getDetailPage = async(req, res) => {
    let userID = req.params.id;
    let user = await pool.execute(`SELECT * FROM user where id = ?`,[userID])
   
    return res.send(JSON.stringify(user[0]))
}


export default {
    getHomepage, getDetailPage
}
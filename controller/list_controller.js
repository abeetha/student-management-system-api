const connection = require('../db/db-connection');

const getAllList = (req, res) => {
  connection.query('select * from list', (err, rows) => {
    if (err) throw err
    // console.log(rows);
    res.json(rows)
  })
}
const getAllImages = (req, res) => {
  connection.query('select * from images', (err, rows) => {
    if (err) throw err
    res.json(rows)
  })
}
const addList = (req, res) => {
  connection.query('insert into list (list) values(?)', [req.body.list], (err, result) => {
    // console.log('====================================');
    // console.log(result.insertId);
    // console.log('====================================');
    // if (err) throw err
    // res.json(rows)
    if (err) {
      console.error(err);
      res.status(500).send('Error saving note');
    } else {
      res.json(result.insertId);
    }
  })
}
const deleteList = (req, res) => {
  connection.query('delete from list where id=?', [req.params.id], (err, result) => {
    // console.log('====================================');
    // console.log(result.insertId);
    // console.log('====================================');
    // if (err) throw err
    // res.json(rows)
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting note');
    } else {
      res.json(result.insertId);
    }
  })
}
const updateList = (req, res) => {

  connection.query('update list set list=? where id=?', [req.body.list, req.params.id], (err, result) => {
    console.log('====================================');
    console.log(result.updateId + " - " + req.params.id);
    console.log('====================================');
    // if (err) throw err
    // res.json(rows)
    if (err) {
      console.error(err);
      res.status(500).send('Error saving note');
    } else {
      console.log('====================================');
      console.log(result.insertId);
      console.log('====================================');
      res.json(result);
    }
  })
}
const uploadImage = (req, res) => {
  try {
    if (req.file == undefined) {
      return res.json({ message: "Please upload a file!" });
    }
    console.log(req.params.id);
    connection.query('UPDATE list set imagename=? where id=?', [req.file.filename, req.params.id], (err, rows) => {
      if (err) throw err
    })
    return res.json({
      image: req.file,
      message: 'Image uploaded successfully'
    });
  } catch (error) {
    res.json({ error: 'Internal Server Error! Try again, please!' })
  }
}
module.exports = { getAllList, getAllImages, uploadImage, addList, updateList, deleteList }
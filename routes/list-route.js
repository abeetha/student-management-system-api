const express = require('express')
const router = express.Router();
const { upload } = require("../middleware/multer")

const { getAllList, addList, uploadImage, updateList, deleteList } = require('../controller/list_controller')

router.get('/get_list', getAllList)
router.post('/add_list', addList)
router.put('/update_list/:id', updateList)
router.delete('/delete_list/:id', deleteList)
router.post("/upload_image/:id", upload.single("image"), uploadImage);

module.exports = router;
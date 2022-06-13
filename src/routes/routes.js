const express = require('express');
const router = express.Router();
const db = require('../../db/db');

router.post('/api/v1/postdata', async function (req, res, next) {
    const {Name, Age, Email, Guanahani, Puertorico, Carabelas, First, From, Liked} = req.body;
    res.render('goback1')
    const newCuestionary = new db.model({
        name: Name,
        age: Age,
        email: Email,
        guanahani: Guanahani,
        puerto_rico: Puertorico,
        cantidad_carabelas: Carabelas,
        from: From,
        liked: Liked
    });
    await newCuestionary.save();
   
})
router.get('/', function (req, res){
    res.render('index');
})
router.get('/api/v1/getdata', async function (req,res) {
    const data = await db.model.find();
    if(data.length > 0) {
    res.render('data', {data})
    } else if(data.length === 0) {
        res.render('nodata')
    }
}) 
router.get('/api/v1/delete/:id', async function (req, res) {
    const id = req.params.id;
    await db.model.findByIdAndDelete(id);
    res.render('goback2')
})
module.exports = router;

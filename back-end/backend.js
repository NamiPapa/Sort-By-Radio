var express = require('express');
var app = express();
var multer = require('multer');
var cors = require('cors');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

var upload = multer({ storage: storage }).single('file');

app.use(cors());

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err){
            res.status(500).json(err)
        }else if(err){
            res.status(500).json(err)
        }
        res.status(200).send(req.file)
    })
})

app.listen(8000, () => {
    console.log("App running");
})
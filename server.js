var express = require('express');
var cors = require('cors');
require('dotenv').config()

const multer = require('multer')
const upload = multer()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});


//upfile
app.post(
  "/api/fileanalyse",

  upload.single("upfile"),
  
  (req, res) => {

    let resposta = {}
    console.log(req.file)
    resposta['name'] = req.file.originalname
    resposta['type'] = req.file.mimetype
    resposta['size'] = req.file.size

    res.json(resposta)
  }

  
)


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

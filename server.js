const express = require('express')
const path =  require('path')
const app = express()
app.use('/static', express.static('public'))
app.use(express.static(__dirname + '/templates'));

const port = 3000

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const {pdfMerge} = require("./merge")
//  app.use(express.static('public'))




app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/index.html'))
})

app.post('/merge', upload.array('pdfs', 2), async function (req, res, next) {

    let id = await pdfMerge(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
    res.redirect(`http://localhost:3000/static/merged${id}.pdf`)

    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
  })

app.listen(port, () => {
  console.log(`Example app listening on port https://localhost:${port}`)
})
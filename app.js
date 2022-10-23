const fileUpload = require('express-fileupload')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended : false }))
app.use(express.json())
app.use(fileUpload())


app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    if ( req.files ) {
        
        const file = req.files.file
        const fileName = file.name

        file.mv('./uploads/' + fileName, (err) => {
            if (err) {
                res.send(err)
            } else {
                res.send("File is successfully Uploaded")
            }
        })
    }
})

module.exports = app
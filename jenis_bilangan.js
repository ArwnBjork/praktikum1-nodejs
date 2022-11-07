const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

app.post("/desimal", (req,res) => {
    let no = Number(req.body.no)
    let biner = parseInt(no, 10).toString(2)
    let heksadesimal = parseInt(no, 10).toString(16)
    let oktal = parseInt(no, 10).toString(8)
    
    let response = {
    desimal: no,
    biner: biner,
    heksadesimal: heksadesimal,
    oktal: oktal
     
    }
    res.json(response)
   })   

   app.post("/biner", (req,res) => {
    let no = Number(req.body.no)
    let desimal = parseInt(no, 2).toString(10)
    let heksadesimal = parseInt(no, 2).toString(16)
    let oktal = parseInt(no, 2).toString(8)
    
    let response = {
    desimal: no,
    desimal: desimal,
    heksadesimal: heksadesimal,
    oktal: oktal
     
    }
    res.json(response)
   })   

   app.post("/heksadesimal", (req,res) => {
    let no = Number(req.body.no)
    let desimal = parseInt(no, 16).toString(10)
    let biner = parseInt(no, 16).toString(2)
    let oktal = parseInt(no, 16).toString(8)
    
    let response = {
    desimal: no,
    desimal: desimal,
    biner: biner,
    oktal: oktal
     
    }
    res.json(response)
   })   

   app.post("/oktal", (req,res) => {
    let no = Number(req.body.no)
    let desimal = parseInt(no, 8).toString(10)
    let biner = parseInt(no, 8).toString(2)
    let heksadesimal = parseInt(no, 8).toString(16)
    
    let response = {
    desimal: no,
    desimal: desimal,
    biner: biner,
    heksadesimal: heksadesimal
     
    }
    res.json(response)
   })   

app.listen(7003, () => {
    console.log("Server run on port rengganis");
   })
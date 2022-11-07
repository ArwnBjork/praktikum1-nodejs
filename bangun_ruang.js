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

app.post("/silinder", (req,res) => {
    let r = Number(req.body.r)
    let t = Number(req.body.t)
    let volume = 3.14 * r**2 * t
    let luas_permukaan = 2 * 3.14 * r * (r + t)
    
    let response = {
    r: r,
    t: t,
    volume: volume,
    luas_permukaan: luas_permukaan
     
    }
    res.json(response)
   })   

   app.post("/kubus", (req,res) => {
    let s = Number(req.body.s)
    let volume = s**3
    let luas_permukaan = 6 * s**2
    
    let response = {
    s: s,
    volume: volume,
    luas_permukaan: luas_permukaan
     
    }
    res.json(response)
   })   

   app.post("/bola", (req,res) => {
    let r = Number(req.body.r)
    let volume = (4/3) * 3.14**3
    let luas_permukaan = 3 * 3.14 * r**2
    
    let response = {
    r: r,
    volume: volume,
    luas_permukaan: luas_permukaan
     
    }
    res.json(response)
   })   

   app.post("/balok", (req,res) => {
    let p = Number(req.body.p)
    let l = Number(req.body.l)
    let t = Number(req.body.t)
    let volume = p * l * t
    let luas_permukaan = 2 * (pl + lt + pt)
    
    let response = {
    r: r,
    volume: volume,
    luas_permukaan: luas_permukaan
     
    }
    res.json(response)
   })   

app.listen(7431, () => {
    console.log("Server run on port samin");
   })
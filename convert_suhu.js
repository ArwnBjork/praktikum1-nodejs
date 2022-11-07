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

// end-point "/convert/celcius"
app.post("/celcius", (req,res) => {
    let temp = Number(req.body.temp)
    let reamur = temp / 5 * 4
    let fahrenheit =  (9/5 * temp) + 32
    let kelvin = temp + 273.15
    
    let response = {
    reamur: reamur,
    fahrenheit: fahrenheit,
    kelvin: kelvin 
     
    }
    res.json(response)
   })   

   // end point "/convert/reamur"
   app.post("/reamur", (req, res) => {
    let temp = Number(req.body.temp)
    let celcius = temp * (5/4)
    let fahrenheit = temp * (9/4) + 32 
    let kelvin = temp * (5/4) + 273.15 

    let response = {
        celcius: celcius,
        fahrenheit: fahrenheit,
        kelvin:kelvin

    }
    res.json(response)
   })

    // end point "/convert/fahrenheit"
   app.post("/convert/fahrenheit", (req, res) => {
    let temp = Number(req.body.temp)
    let celcius = (temp - 32) * (5/9)
    let reamur = (reamur - 32) * (4/9)
    let kelvin = (kelvin + 459.67) * (5/9) 

    let response = {
        celcius: celcius,
        reamur: reamur,
        kelvin: kelvin

    }
    res.json(response)
   })

   // end point "/convert/kelvin"
   app.post("/convert/kelvin", (req, res) => {
    let temp = Number(req.body.temp)
    let celcius = temp - 273.5
    let reamur = (temp - 273.15) *(4/5)
    let fahrenheit = temp * (9/5)- 459.67

    let response = {
        celcius: celcius,
        reamur: reamur,
        fahrenheit: fahrenheit

    }
    res.json(response)
   })


app.listen(7366, () => {
    console.log("Server run on port sesmarang stut jack");
   })
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

app.post('/bmi', (req, res) => {
    let tb = Number(req.body.tinggi)
    let bb = Number(req.body.berat)

    let bmi = bb / (tb * tb)
    let status;
    if (bmi < 18.5) {
        status = "Kekurangan Berat Badan"
    } else if (bmi < 24.9) {
        status = "Normal (ideal)"
    } else if (bmi < 29.9) {
        status = "Kelebihan Berat Badan"
    } else {
        status = "Kegemukan"
    }

    let response = {
        tinggi: tb,
        berat: bb,
        bmi: bmi,
        status: status
    }
    res.json(response)

})

// no. 5 bilangan ganjil genap <------------

app.get('/bilangan/:angka', (req, res) => {
    let angka = Number(req.params.angka)

    let bilangan = angka % 2
    let message
    if (bilangan == 0) {
        message = "ini bilangan Genap"
    } else if (bilangan == 1) {
        message = "ini bilangan Ganjil"
    }
    let response = {
        angka: angka,
        bilangan: message

    }
    res.json(response)
})

app.listen(7006, () => {
    console.log("Server run on port 7006");
   })
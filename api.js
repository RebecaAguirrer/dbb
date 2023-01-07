const express = require('express')
const {json} = require("express");
const app = express()

app.get('/',(req,res)=>{
    res.send("fim")
})
app.get('/posts', (req, res) => {

     res.json(
         [
             {
                 number: 1,
                 name: 'https://drive.google.com/uc?export=download&id=12OXhwMUUpM8b33nEZ4beVKydQgahaFJ7',
                 gender: 'male'
             },
             {
                 number: 2,
                 name: 'Maria',
                 gender: 'female'
             },
             {
                 number: 3,
                 name: 'Sefa',
                 gender: 'male'
             }
         ]
    );
})


app.listen(8000, () => {
    console.log("servidor rodando....")
})
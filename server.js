const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000
// const postOffice = require('../CS313-Node/public/js/postal.js')
const familyServices = require("./public/js/grounding").default;
let urlencodedParser = bodyParser.urlencoded({extended:true});

const { Pool } = require('pg');
const dbConnectionString = process.env.DATABASE_URL || "heroku pg:psql postgresql-pointy-85036 --app immense-everglades-17729";

const pool = new Pool({
  connectionString: dbConnectionString
});


express()
  .use(express.static(__dirname + '/public'))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/home', (req, res) => res.render('pages/index'))
  .post('/getRate', urlencodedParser,
        (req, res) => {
          return res.render('pages/postal.ejs', {data:req.body})
        })
  .get("/grounding",(req,res)=>familyServices.listChildren(req, res, pool))
  .get("/grounding/:name", (req, res) => familyServices.groundingInfo(req, res, pool))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

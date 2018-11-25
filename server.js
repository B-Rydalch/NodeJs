const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
// const postOffice = require('../CS313-Node/public/js/postal.js')
let urlencodedParser = bodyParser.urlencoded({extended:false});
const dbConnectionString = "heroku pg:psql postgresql-pointy-85036 --app immense-everglades-17729";

express()
  .use(express.static(__dirname + '/public'))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/home', (req, res) => res.render('pages/index'))
  .post('/getRate', urlencodedParser,
        //  (req, res) =>console.log(req.body),
        (req, res) => res.render('pages/postal.ejs', {data:req.body}))
      //   (req, res) => postOffice.postalServices(res,req))
  .get("/child", getChild) 
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


  // (get) child info
  function getChild(req, res) {
    console.log ("getting child info");
    res.json({name: "Eli"});
  }

  // (get) list of children
  function listChild(req, res) {
    console.log ("getting child info");
    res.json({name: "Eli"});
  }

  // (post) insert grounding 
  function grounded(req, res) {
    console.log ("insert grounding");
    res.json({name: "Eli"});
  }

  // (post) delete grounding
  function deleteGrounding(req, res) {
    console.log ("delete grounding");
    res.json({name: "Eli"});
  }

  // (put) update grounding => increasing time, adding items taken away
  function updateGrounding(req, res) {
    console.log ("update grounding");
    res.json({name: "Eli"});
  }
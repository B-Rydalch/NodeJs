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
  .get("/grounding", (req, res) => res.render('pages/grounding'),listChildren)
  .get("/child", getChild) 
  .get("/listChildren", listChildren)
  .post("/addChild", addChild)
  .post("/grounded", grounded)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



  /**************FUNCTIONS**************/
  // (get) child info
  function getChild(req, res) {
    console.log ("getting child info");
    // res.json({name: "Eli"});

    const text = 'SELECT * FROM children where $1 = $2;';
    const values = ['child_name','Liam'];

    // callback
    client.query(text, values, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows[0]);
      }
    })

    // promise
    client.query(text, values)
      .then(res => {
        console.log(res.rows[0]);
      })
      .catch(e => console.error(e.stack))
    
    // async/await
    try {
      var query = pool.query(text, values)
      res = pool.query(text, values)

      res.json({
        query
      })
      console.log(res.rows[0]);
      console.log("Success getting child info" + res);
    } catch(err) {
      console.log(err.stack);
    }
  }

  // (get) list of children
  function listChildren(req, res) {
    console.log ("getting child info");
    res.json({text: "getting child info"});

    const text = 'SELECT * FROM $1;';
    const values = ['children'];

    // callback
    client.query(text, values, (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(res.rows[0]);
      }
    })

    // promise
    client.query(text, values)
      .then(res => {
        console.log(res.rows[0]);
      })
      .catch(e => console.error(e.stack))
    
    // async/await
    try {
      res = pool.query(text, values);
      console.log(res.rows[0]);
    } catch(err) {
      console.log(err.stack);
    }

  }

  // (post) insert child
  function addChild(req,res) {
    const text = 'INSERT INTO children(name, age, num_grounded) VALUES($1, $2, $3);';
    const values = ['baby', 0, 0];

    // callback
    client.query(text, values, (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(res.rows[0]);
      }
    })

    // promise
    client.query(text, values)
      .then(res => {
        console.log(res.rows[0]);
      })
      .catch(e => console.error(e.stack))
    
    // async/await
    try {
      res = pool.query(text, values);
      console.log(res.rows[0]);
      console.log("success");
    } catch(err) {
      console.log(err.stack);
    }
  }

  // (post) insert grounding 
  function grounded(req, res) {
    console.log ("insert grounding");
    res.json({name: "Eli"});

    const text = 'INSERT INTO grounded(item, reason, amount, child_id, parent_id) VALUES($1, $2, $3, $4, $5);';
    const values = ['toy1', 'talk back','5:00', 2, 1];

    // callback
    client.query(text, values, (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(res.rows[0]);
      }
    })

    // promise
    client.query(text, values)
      .then(res => {
        console.log(res.rows[0]);
      })
      .catch(e => console.error(e.stack))
    
    // async/await
    try {
      res = pool.query(text, values);
      console.log(res.rows[0]);
    } catch(err) {
      console.log(err.stack);
    }
  }

  // (post) delete grounding
  function deleteGrounding(req, res) {
    console.log ("delete grounding");
    res.json({name: "Eli"});

    const text = 'DELETE FROM grounded where child_id = $1 and grounded_id = $2;';
    const values = [2,1];

    // callback
    client.query(text, values, (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(res.rows[0]);
      }
    })

    // promise
    client.query(text, values)
      .then(res => {
        console.log(res.rows[0]);
      })
      .catch(e => console.error(e.stack))
    
    // async/await
    try {
      res = pool.query(text, values);
      console.log(res.rows[0]);
    } catch(err) {
      console.log(err.stack);
    }
  }

  // (put) update grounding => increasing time, adding items taken away
  function updateGrounding(req, res) {
    console.log ("update grounding");
    res.json({name: 'Eli'});

    const text = 'update grounded SET $1 = $2  WHERE $3 = $4 AND grounded.id = $5;';
    const values = ['5:00', '2:00', 2, 1];

    // callback
    client.query(text, values, (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(res.rows[0]);
      }
    })

    // promise
    client.query(text, values)
      .then(res => {
        console.log(res.rows[0]);
      })
      .catch(e => console.error(e.stack))
    
    // async/await
    try {
      res = pool.query(text, values);
      console.log(res.rows[0]);
    } catch(err) {
      console.log(err.stack);
    }
  }
  
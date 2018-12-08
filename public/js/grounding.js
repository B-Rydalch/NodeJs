// const google = require('google')


// // Google API 
// setOnLoadCallback(<script src="https://apis.google.com/js/platform.js?onload=myFunc" async defer></script>)
// google.charts.load("current", {packages: ["line"]});
// // set a callback to run whe n the Google Visualization API is loaded.-->
// google.charts.setOnLoadCallback(drawChart);

// var materialOptions = {
//     chart: {
//       title: 'Average Temperatures and Daylight in Iceland Throughout the Year'
//     },
//     width: 900,
//     height: 500,
//     series: {
//       // Gives each series an axis name that matches the Y-axis below.
//       0: {axis: 'Temps'},
//       1: {axis: 'Daylight'}
//     },
//     axes: {
//       // Adds labels to each axis; they don't have to match the axis names.
//       y: {
//         Temps: {label: 'Temps (Celsius)'},
//         Daylight: {label: 'Daylight'}
//       }
//     }
//   };


  function listChildren(req,res, pool) {
    console.log("calling family Services");
    // res.render('pages/grounding.ejs');
    queryDB(req,res,pool, (err, data) => {
      if (err) {
        console.log(err);
        res.json({success: false});
      }
      res.render('pages/grounding.ejs',{children: data});
    });
  }


function queryDB(req,res, pool, callback){
  query = "Select * from children";
  pool.query(query, (err, results) => {
    console.log("inside pool");
      if (err) {
          console.log(`ERR: ${err}`);
          callback(err);
      }

      console.log('Results: ', JSON.stringify(results.rows));

      callback(null, results.rows);
  });
}

function groundingInfo(req, res, pool) {
  // return info about specific child => parsed from url req.params.name
  console.log("calling groundingInfo");
  //pass name to db function - inside db function, query info for that name
  groundingCountDB(req,res,pool, (err, data) => {
    if (err) {
      console.log(err);
      res.json({success: false});
    }
    res.render('pages/grounding.ejs',{children: data});
  });

  
  res.json({success: true, info: data});
}

function groundingCountDB(req,res, pool, callback){
  console.log('calling groundingCountDB');
  query = "select c.id, c.name, g.children_id, g.number_times_grounded from children c, grounded g where c.id = g.children_id and c.name = '$1'";
  params = [req.params.name]
  console.log('query: '+ query);
  console.log("params: " + params);
  pool.query(query, params, (err, results) => {
    console.log("inside pool");
      if (err) {
          console.log(`ERR: ${err}`);
          callback(err);
      }

      console.log('Results: ', JSON.stringify(results.rows));

      callback(null, results.rows);

  });
}
  
module.exports = {
  listChildren,
  groundingInfo
}
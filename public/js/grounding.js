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
  
module.exports = {
  listChildren
}
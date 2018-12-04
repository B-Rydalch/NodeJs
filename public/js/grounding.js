// Google API 
google.charts.load("current", {packages: ["line"]});
// set a callback to run when the Google Visualization API is loaded.-->
google.charts.setOnLoadCallback(drawChart);

var materialOptions = {
    chart: {
      title: 'Average Temperatures and Daylight in Iceland Throughout the Year'
    },
    width: 900,
    height: 500,
    series: {
      // Gives each series an axis name that matches the Y-axis below.
      0: {axis: 'Temps'},
      1: {axis: 'Daylight'}
    },
    axes: {
      // Adds labels to each axis; they don't have to match the axis names.
      y: {
        Temps: {label: 'Temps (Celsius)'},
        Daylight: {label: 'Daylight'}
      }
    }
  };


  function familyServices(req,res) {
    console.log("calling family Services");
  }
  
  module.exports = {
    familyServices
}
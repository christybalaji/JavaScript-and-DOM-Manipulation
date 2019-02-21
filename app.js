// from data.js
var tableData = data;

//Get a reference to the table body
var tbody = d3.select("tbody");

//Create a function called buildTable.  This create table within the html file
function buildTable(ufodata){
    //Clear out existing data
    tbody.html("")
    // for each row in the obeject tableData append a table row(tr) within the html tbody
    ufodata.forEach(x=> {
        var row = tbody.append("tr");
        // append the value of each object to a table data(td) row
        Object.values(x).forEach((value)=>{
            var cell = row.append('td').text(value);
        })
    });

}
//initialize table
buildTable(tableData);

//Select filter button and attach event listener
 
 var button = d3.select("#filter-btn");
//event listener "click" for the filter button
 button.on("click", filterClick);

 //Create a function called filterClick so that whenever the "click" button is submitted
 //the user input values will be stored in a variable
 function filterClick() {
     // prevent website from refreshing
     d3.event.preventDefault();
   //taking values inside boxes of date,city,state and shape
    var date = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var shape = d3.select("#shape").property("value");
 
    // filterData is the original data by default
    var filteredData = tableData;
//if the value inside the date, city, state, or shape is true if value inside  box then filter
if (date !== ""){
        filteredData = filteredData.filter(r=> r.datetime === date);  
    }
    if (city !== ""){
        filteredData = filteredData.filter(r=> r.city === city);
    }
    if (state !== ""){
        filteredData = filteredData.filter(r=> r.state === state);
    }
    if (shape !== ""){
        filteredData = filteredData.filter(r=> r.shape === shape);
    }
    //runs the buildTable function on the filteredData
    buildTable(filteredData);

  }








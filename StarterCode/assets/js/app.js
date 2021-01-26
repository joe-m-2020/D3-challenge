// @TODO: YOUR CODE HERE!
// Chart Params
var svgWidth = 800;
var svgHeight = 600;

var margin = { top: 20, right: 100, bottom: 60, left: 60 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import data from an external CSV file
d3.csv("assets/data/data.csv").then(function(censusData) {
  console.log(censusData);
  console.log([censusData]);
    
  // Add X axis
  var xrange = d3.extent(censusData.map(function(d){return d.income}));

  var x = d3.scaleLinear()
  .domain(xrange)
  .nice()
  .range([ 0, width ]);
  chartGroup.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

    
// Add Y axis
var yrange = d3.extent(censusData.map(function(d){return d.obesity}));
  var y = d3.scaleLinear()
  .domain(yrange)
  .nice()
  .range([ height, 0]);
  chartGroup.append("g")
  .call(d3.axisLeft(y));

var dots =chartGroup.append('g')
.selectAll()
.data(censusData)
.enter()
.append('g')
dots.append("circle")
  .attr("cx", function (d) { return x(d.income); } )
  .attr("cy", function (d) {  return y(d.obesity); } )
  .attr("r", 10)
  .style("fill", "#69b3a2");

dots.append('text')
.text(function(d) {return d.abbr})
  .attr("x", function (d) { return x(d.income)-8; } )
  .attr("y", function (d) {  return y(d.obesity)+6; } )
  .style("font-size", "13px")

// Add X axis label:
svg.append("text")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height + margin.top + 40)
    .text("Income");
// Y axis label:
svg.append("text")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left+80)
    .attr("x", -margin.top)
    .text("Obesity");
});
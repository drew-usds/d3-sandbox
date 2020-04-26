$(function () {
  var dataex = [10, 30, 50, 70, 90];
  var height = 200,
    width = 720,
    barWidth = 40,
    barOffset = 20;
  d3.select(".chart").append('svg');

  var fruits = ['apple', 'mango', 'banana', 'orange'];
  d3.select('ul')
  .selectAll('li')
  .data(fruits)
  .enter()
  .append('li')
  .text(function(d) { return d; });

});

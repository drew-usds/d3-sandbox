$(function () {
  var ex = [1,90,23,52,54,120,198,220,234];
  d3.select('.foo')
  .selectAll('div')
  .data(ex)
  .enter()
  .append("div")
  .style("width", function(d) { return d + "px"; })
  .text(function(d) { return d; });

});

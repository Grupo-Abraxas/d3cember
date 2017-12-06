var d3 = window.d3
var _ = window._

// make a list of 10 numbers from 0 to 100
const data = _.map(_.range(10), d => _.random(0, 100))

const svg = d3.select('#root')

// declare our scale
const xScale = d3
  .scaleBand()
  .domain(data)
  .range([0, 960])
  .padding(0.1)

// Escala inicial antes de band
// const xScaleLinear = d3
//   .scaleLinear()
//   .domain([0, 10])
//   .range([0, 500])

// yScale
const yScale = d3
  .scaleLinear()
  .domain([0, 100])
  .range([0, 500])

// our pretty bars
const barras = svg
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', d => xScale(d))
  .attr('y', d => 500 - yScale(d))
  .attr('width', xScale.bandwidth())
  .attr('height', d => yScale(d))
  .attr('fill', 'steelblue')

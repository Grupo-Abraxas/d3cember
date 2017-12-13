var d3 = window.d3
var _ = window._

const width = 960
const height = 500

// make a list of 10 numbers from 0 to 100
// const data = _.sortBy(_.map(_.range(10), d => _.random(0, 100)))
const data = _.chain(_.range(10))
  .map(d => _.random(0, 100))
  .sortBy()
  .reverse()
  .value()

const svg = d3.select('#root')

// declare our scale
const xScale = d3
  .scaleBand()
  .domain(data)
  .range([0, width])
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
  .range([0, height])

// axes
const xAxis = d3.axisBottom(xScale).tickFormat((d, i) =>
  `Columna ${i + 1}`
)

const yAxis = d3.axisLeft(yScale)

// our pretty bars
const barras = svg
  .selectAll('rect.bar')
  .data(data)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .classed('barra-sm', d => d <= 30)
  .classed('barra-md', d => d > 30 && d <= 66)
  .classed('barra-lg', d => d > 66)
  .classed('barra-full', d => d === 100)
  .attr('x', d => xScale(d))
  .attr('y', d => height - yScale(d) - 30)
  .attr('width', xScale.bandwidth())
  .attr('height', d => yScale(d))

// draw axes
svg
  .append('g')
  .attr('class', 'x axis')
  .attr('transform', `translate(0, ${height - 30})`)
  .call(xAxis)
  .selectAll('text')
  .attr('transform', 'translate(12, 35)rotate(90)')

// column values
const columnValues = svg
  .selectAll('text.column-label')
  .data(data)svg
  .append('g')
  .attr('class', 'x axis')
  .attr('transform', `translate(0, ${height - 30})`)
  .call(xAxis)
  .selectAll('text')
  .attr('transform', 'translate(12, 35)rotate(90)')

  .enter()
  .append('text')
  .attr('class', 'column-label')
  .attr('text-anchor', 'middle')
  .attr('x', d => xScale(d) + xScale.bandwidth() / 2)
  .attr('y', d => height - yScale(d) - 30 - 5)
  .text(d => d)

console.log(data)

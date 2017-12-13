var d3 = window.d3
var _ = window._

const data = _.chain(_.range(10))
  .map(d => _.random(0, 100))
  .sortBy()
  .reverse()
  .value()

const margin = {
  top: 20,
  bottom: 100,
  left: 20,
  right: 20
}

const width = 960 - margin.left - margin.right
const height = 600 - margin.top - margin.bottom

const svg = d3
  .select('#root')
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`)

// scales
const xScale = d3
  .scaleBand()
  .domain(data)
  .range([0, width])
  .padding(0.1)

const yScale = d3
  .scaleLinear()
  .domain([0, 100])
  .range([0, height])

// axes
const xAxis = d3.axisBottom(xScale).tickFormat((d, i) => `Columna ${i + 1}`)

// bars
const barras = svg
  .selectAll('g.barras')
  .data(data)
  .enter()
  .append('g')
  .classed('barras', true)
  .attr('transform', d => `translate(${xScale(d)}, 0)`)

const rects = barras
  .append('rect')
  .classed('bar', true)
  .classed('barra-sm', d => d <= 30)
  .classed('barra-md', d => d > 30 && d <= 66)
  .classed('barra-lg', d => d > 66)
  .classed('barra-full', d => d === 100)
  .attr('width', xScale.bandwidth())
  .attr('height', d => yScale(d))
  .attr('y', d => height - yScale(d))

const texts = barras
  .append('text')
  .classed('column-label', true)
  .attr(
    'transform',
    d => `translate(${xScale.bandwidth() / 2}, ${height - yScale(d) - 5})`
  )
  .attr('text-anchor', 'middle')
  .text(d => d)

svg
  .append('g')
  .attr('class', 'x axis')
  .attr('transform', `translate(0, ${height})`)
  .call(xAxis)
  .selectAll('text')
  .attr('transform', 'translate(12, 35)rotate(90)')

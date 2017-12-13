var d3 = window.d3
var _ = window._

const data = _.chain(_.range(10))
  .map(d => _.random(0, 100))
  .sortBy()
  .reverse()
  .value()

const margin = {
  top: 20,
  bottom: 20,
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
  .attr('width', xScale.bandwidth())
  .attr('height', d => yScale(d))
  .attr('y', d => height - yScale(d))

const texts = barras
  .append('text')
  .classed('column-label', true)
  .attr(
    'transform',
    d => `translate(${xScale.bandwidth() / 2}, ${height - yScale(d)})`
  )
  .text(d => d)

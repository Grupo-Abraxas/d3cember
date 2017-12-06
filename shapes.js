console.log('Espero esto funcione')
const d3 = window.d3

// Formas básicas

const shapes = d3.select('#shapes')

// Rectángulo
shapes
  .append('rect')
  .attr('x', 42)
  .attr('y', 42)
  .attr('width', 100)
  .attr('height', 150)
  .attr('fill', 'purple')

// Círculo
shapes
  .append('circle')
  .attr('cx', 500)
  .attr('cy', 320)
  .attr('r', 20)
  .attr('fill', 'gold')

// Línea
shapes
  .append('line')
  .attr('x1', 0)
  .attr('y1', 0)
  .attr('x2', 960)
  .attr('y2', 500)
  .attr('stroke', 'red') // color de la línea
  .attr('stroke-width', 4) // ancho de la línea

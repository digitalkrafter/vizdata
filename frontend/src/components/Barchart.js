import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Barchart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Set up the SVG canvas dimensions
    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    // Create the SVG container
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background', '#f0f0f0')
      .style('margin-top', '20px')
      .style('overflow', 'visible');

    // Create scales
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.teacher))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.students)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Clear existing content before rendering new elements
    svg.selectAll('*').remove();

    // Draw bars
    svg.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.teacher))
      .attr('y', d => yScale(d.students))
      .attr('width', xScale.bandwidth())
      .attr('height', d => yScale(0) - yScale(d.students))
      .attr('fill', 'steelblue');

    // Add X axis
    svg.append('g')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale));

    // Add Y axis
    svg.append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale));

    // Add labels
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', height - 5)
      .attr('text-anchor', 'middle')
      .text('Teachers');

    svg.append('text')
      .attr('x', -height / 2)
      .attr('y', 15)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('Number of Students');

  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default Barchart;

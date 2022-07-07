import React, { useEffect } from "react";
import * as d3 from "d3";
import { useD3 } from "./useD3";
// import { faker } from "@faker-js/faker";
// import useWindowSize from "../../utils/useWindowSize";
export const LineTime  = ({ data }) => {
  const ref = useD3(
    (svg) => {
        const height = 620
        const width = height
    const margin = ({top: 20, right: 30, bottom: 30, left: 40})        
    function intrayear(date) {
        date = new Date(+date);
        date.setUTCFullYear(2000);
        return date;
      }
      function dashTween() {
        const length = this.getTotalLength();
        return d3.interpolate(`0,${length}`, `${length},${length}`);
      }
      const x = d3.scaleUtc([Date.UTC(2000, 0, 1), Date.UTC(2001, 0, 0)], [margin.left, width - margin.right])
      const y = d3.scaleLinear([0, d3.max(data, d => d.value)], [height - margin.bottom, margin.top])
      const z = d3.scaleSequential(d3.extent(data, d => d.date.getUTCFullYear()), t => d3.interpolateSpectral(1 - t))
      const xAxis = g => g
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x)
          .ticks(width / 80, "%B")
          .tickSizeOuter(0))

      const yAxis = g => g
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).ticks(null, "s"))
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll(".tick:not(:first-of-type) line").clone()
          .attr("x2", width)
          .attr("stroke", "#ddd"))
      .call(g => g.select(".tick:last-of-type text").clone()
          .attr("x", 3)
          .attr("text-anchor", "start")
          .attr("font-weight", "bold")
          .text(data.y))

          const line = d3.line()
          .defined(d => !isNaN(d.value))
          .x(d => x(intrayear(d.date)))
          .y(d => y(d.value))

         const draw = async () => { 
             svg = d3.select("#line-time")
                .attr("viewBox", [0, 0, width, height]);
          
            svg.append("g")
                .call(xAxis);
          
            svg.append("g")
                .call(yAxis);
            
            const g = svg.append("g")
                .attr("font-family", "sans-serif")
                .attr("font-size", 10)
                .attr("fill", "none")
                .attr("stroke-width", 1.5)
                .attr("stroke-miterlimit", 1);
          
            for (const [key, values] of d3.group(data, d => d.date.getUTCFullYear())) {
              // yield svg.node();
          
              await g.append("path")
                  .attr("d", line(values))
                  .attr("stroke", z(key))
                  .attr("stroke-dasharray", "0,1")
                .transition()
                  .ease(d3.easeLinear)
                  .attrTween("stroke-dasharray", dashTween)
                .end();
          
              if (!isNaN(values[values.length - 1].value)) {
                g.append("text")
                    .attr("stroke", "white")
                    .attr("stroke-width", 3)
                    .attr("dx", 4)
                    .attr("dy", "0.32em")
                    .attr("x", x(intrayear(values[values.length - 1].date)))
                    .attr("y", y(values[values.length - 1].value))
                    .text(key)
                  .clone(true)
                    .attr("fill", z(key))
                    .attr("stroke", "none");
              }
            }
          }
          draw()
    },
    [data.length]
  );

  return (
    <div style={{ color:'white' }}>
      <svg id="line-time" ref={ref} style={{}}></svg>
    </div>
  );
};

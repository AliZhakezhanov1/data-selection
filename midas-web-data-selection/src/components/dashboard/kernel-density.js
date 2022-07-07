import React, { useEffect } from "react";
import * as d3 from "d3";
import { useD3 } from "./useD3";
// import { faker } from "@faker-js/faker";
// import useWindowSize from "../../utils/useWindowSize";
export const KernelDensity = ({ data }) => {
  const ref = useD3(
    (svg) => {
      const margin = { top: 20, right: 30, bottom: 50, left: 40 };
      const height = 620;
      const width = height;
      const bandwidth = 10;
      const yAxis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .call(d3.axisLeft(y).ticks(null, "%"))
          .call((g) => g.select(".domain").remove());

      const xAxis = (g) =>
        g
          .attr("transform", `translate(0,${height - margin.bottom})`)
          .call(d3.axisBottom(x))
          .call((g) =>
            g
              .append("text")
              .attr("x", width - margin.right)
              .attr("y", -6)
              .attr("fill", "#000")
              .attr("text-anchor", "end")
              .attr("font-weight", "bold")
              .text(data.title)
          );
      const x = d3
        .scaleLinear()
        .domain(d3.extent(data))
        .nice()
        .range([margin.left, width - margin.right]);
      const thresholds = x.ticks(40);

      const bins = d3.bin().domain(x.domain()).thresholds(thresholds)(data);
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(bins, (d) => d.length) / data.length])
        .range([height - margin.bottom, margin.top]);

      const line = d3
        .line()
        .curve(d3.curveBasis)
        .x((d) => x(d[0]))
        .y((d) => y(d[1]));
      function epanechnikov(bandwidth) {
        return (x) => (Math.abs((x /= bandwidth)) <= 1 ? (0.75 * (1 - x * x)) / bandwidth : 0);
      }
      function kde(kernel, thresholds, data) {
        return thresholds.map((t) => [t, d3.mean(data, (d) => kernel(t - d))]);
      }
      svg = d3.select("#kernel").attr("viewBox", [0, 0, width, height]);

      svg
        .append("g")
        .attr("fill", "steelblue")
        .selectAll("rect")
        .data(bins)
        .join("rect")
        .attr("x", (d) => x(d.x0) + 1)
        .attr("y", (d) => y(d.length / data.length))
        .attr("width", (d) =>
          x(d.x1) - x(d.x0) - 1 > 0 ? x(d.x1) - x(d.x0) - 1 : x(d.x1) - x(d.x0)
        )
        .attr("height", (d) => y(0) - y(d.length / data.length));
      const density = kde(epanechnikov(bandwidth), thresholds, data);
      // console.log(density)
      svg
        .append("path")
        .datum(density)
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("stroke-width", 1.5)
        .attr("stroke-linejoin", "round")
        .attr("d", line);

      svg.append("g").call(xAxis);

      svg.append("g").call(yAxis);

      return svg.node();
    },
    [data.length]
  );

  return (
    <div style={{ color: "white" }}>
      <svg id="kernel" ref={ref} style={{}}></svg>
    </div>
  );
};

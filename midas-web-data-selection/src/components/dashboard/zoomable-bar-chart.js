import React, { useEffect } from "react";
import * as d3 from "d3";
import { useD3 } from "./useD3";
// import { faker } from "@faker-js/faker";
// import useWindowSize from "../../utils/useWindowSize";
export const ZoomBarChart = ({ data }) => {
  const ref = useD3(
    (svg) => {
      const margin = { top: 40, right: 0, bottom: 30, left: 60 };
      const height = 620;
      const width = height;
      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.name))
        .range([margin.left, width - margin.right])
        .padding(0.1);
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.value)])
        .nice()
        .range([height - margin.bottom, margin.top]);
      const xAxis = (g) =>
        g
          .attr("transform", `translate(0,${height - margin.bottom})`)
          .attr("font-size", 6)
          .call(d3.axisBottom(x).tickSizeOuter(0));
      const yAxis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .call(d3.axisLeft(y))
          .call((g) => g.select(".domain").remove());

      function zoom(svg) {
        const extent = [
          [margin.left, margin.top],
          [width - margin.right, height - margin.top],
        ];
        svg.call(
          d3.zoom().scaleExtent([1, 8]).translateExtent(extent).extent(extent).on("zoom", zoomed)
        );
        function zoomed(event) {
          x.range([margin.left, width - margin.right].map((d) => event.transform.applyX(d)));
          svg
            .selectAll(".bars rect")
            .attr("x", (d) => x(d.name))
            .attr("width", x.bandwidth());
          svg.selectAll(".x-axis").call(xAxis);
        }
      }

      svg = d3.select("#zoom-bar-chart").attr("viewBox", [0, 0, width, height]).call(zoom);

      svg
        .append("g")
        .attr("class", "bars")
        .attr("fill", "steelblue")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("font-size", 6)
        .attr("x", (d) => x(d.name))
        .attr("y", (d) => y(d.value))
        .attr("height", (d) => y(0) - y(d.value))
        .attr("width", x.bandwidth());

      svg.append("g").attr("class", "x-axis").call(xAxis).attr("font-size", 12);

      svg.append("g").attr("class", "y-axis").call(yAxis).attr("font-size", 12);

      return svg.node();
    },
    [data.length]
  );

  return (
    <div style={{ color: "white" }}>
      <svg id="zoom-bar-chart" ref={ref} style={{}}></svg>
    </div>
  );
};

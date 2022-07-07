import React, { useEffect } from "react";
import * as d3 from "d3";
import { useD3 } from "./useD3";
// import { faker } from "@faker-js/faker";
// import useWindowSize from "../../utils/useWindowSize";
export const Trend = ({ data, labely }) => {
  // Copyright 2021 Observable, Inc.
  // Released under the ISC license.
  // https://observablehq.com/@d3/box-plot
  const ref = useD3(
    (svg) => {
      const height = 620;
      const width = height;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };
      const x = d3
        .scaleUtc()
        .domain(d3.extent(data, (d) => d.date))
        .range([margin.left, width - margin.right]);
      const y = d3
        .scaleLinear()
        .domain(d3.extent(data, (d) => d.value))
        .nice()
        .range([height - margin.bottom, margin.top]);
      function z() {
        const max = d3.max(data, (d) => Math.abs(d.value));
        return d3.scaleSequential(d3.interpolateRdBu).domain([max, -max]);
      }
      const xAxis = (g) =>
        g
          .attr("transform", `translate(0,${height - margin.bottom})`)
          .call(d3.axisBottom(x).ticks(width / 80))
          .call((g) => g.select(".domain").remove());
      const yAxis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .call(d3.axisLeft(y).ticks(null, "+"))
          .call((g) => g.select(".domain").remove())
          .call((g) =>
            g
              .selectAll(".tick line")
              .filter((d) => d === 0)
              .clone()
              .attr("x2", width - margin.right - margin.left)
              .attr("stroke", "#ccc")
          )
          .call((g) =>
            g
              .append("text")
              .attr("fill", "white")
              .attr("x", 5)
              .attr("y", margin.top)
              .attr("dy", "0.32em")
              .attr("text-anchor", "start")
              // .attr("font-weight", "bold")
              .text(labely)
              .attr("font-size", 15)
          );
      svg = d3.select("#trend").attr("viewBox", [0, 0, width, height]);

      svg.append("g").call(xAxis).attr("font-size", 12);

      svg.append("g").call(yAxis).attr("font-size", 12);

      svg
        .append("g")
        .attr("stroke", "#000")
        .attr("stroke-opacity", 0.2)
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", (d) => x(d.date))
        .attr("cy", (d) => y(d.value))
        .attr("fill", (d) => z(d.value))
        .style("fill", "white")
        .attr("r", 2.5);

      return svg.node();
    },
    [data.length]
  );

  return (
    <div style={{ color: "white" }}>
      <svg id="trend" ref={ref}></svg>
    </div>
  );
};

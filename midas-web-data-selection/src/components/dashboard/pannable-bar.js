import React, { useEffect } from "react";
import * as d3 from "d3";
import { useD3 } from "./useD3";
// import { faker } from "@faker-js/faker";
// import useWindowSize from "../../utils/useWindowSize";
export const PannableBar = ({ data }) => {
  const ref = useD3(
    (svg) => {
      const height = 420;
      const width = height;
      const margin = { top: 20, right: 20, bottom: 30, left: 30 };
      const x = d3
        .scaleUtc()
        .domain(d3.extent(data, (d) => d.date))
        .range([margin.left, width * 6 - margin.right]);
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.value)])
        .nice(6)
        .range([height - margin.bottom, margin.top]);

      const xAxis = (g) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
          d3
            .axisBottom(x)
            .ticks(d3.utcMonth.every(1200 / width))
            .tickSizeOuter(0)
        );
      const yAxis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .call(d3.axisLeft(y).ticks(6))
          .call((g) => g.select(".domain").remove())
          .call((g) =>
            g
              .select(".tick:last-of-type text")
              .clone()
              .attr("x", 3)
              .attr("text-anchor", "start")
              .attr("font-weight", "bold")
              .text(data.y)
          );
      const area = d3
        .area()
        .curve(d3.curveStep)
        .x((d) => x(d.date))
        .y0(y(0))
        .y1((d) => y(d.value));

      const minX = x(data[0].date);
      const maxX = x(data[data.length - 1].date);
      const overwidth = maxX - minX + margin.left + margin.right;

      const parent = d3.select("#pannable-bar");

      parent
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("position", "absolute")
        .style("pointer-events", "none")
        .style("z-index", 1)
        .call((svg) => svg.append("g").call(yAxis));

      const body = parent
        .append("div")
        .style("overflow-x", "scroll")
        .style("-webkit-overflow-scrolling", "touch");
      body
        .append("svg")
        .attr("width", overwidth)
        .attr("height", height)
        .style("display", "block")
        .call((svg) => svg.append("g").call(xAxis))
        .append("path")
        .datum(data)
        .attr("fill", "steelblue")
        .attr("d", area);
        // yield parent.node();

      // Initialize the scroll offset after yielding the chart to the DOM.
      body.node().scrollBy(overwidth, 0);
    },
    [data.length]
  );

  return (
    <div ref={ref} id="pannable-bar">
    </div>
  );
};

//fail
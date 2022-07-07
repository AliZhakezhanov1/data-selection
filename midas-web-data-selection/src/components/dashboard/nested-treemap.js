import React, { useEffect } from "react";
import * as d3 from "d3";
import { useD3 } from "./useD3";
import { faker } from "@faker-js/faker";
// import useWindowSize from "../../utils/useWindowSize";
export const NestMap= ({ data }) => {
  const ref = useD3(
    (svg) => {
      const treemap = (data) =>
        cascade(
          d3
            .treemap()
            .size([width, height])
            .paddingOuter(3)
            .paddingTop(19)
            .paddingInner(1)
            .round(true)(
            d3
              .hierarchy(data)
              .sum((d) => d.value)
              .sort((a, b) => b.value - a.value)
          ),
          3 // treemap.paddingOuter
        );
      function cascade(root, offset) {
        const x = new Map();
        const y = new Map();
        return root
          .eachAfter((d) => {
            if (d.children) {
              x.set(d, 1 + d3.max(d.children, (c) => (c.x1 === d.x1 - offset ? x.get(c) : NaN)));
              y.set(d, 1 + d3.max(d.children, (c) => (c.y1 === d.y1 - offset ? y.get(c) : NaN)));
            } else {
              x.set(d, 0);
              y.set(d, 0);
            }
          })
          .eachBefore((d) => {
            d.x1 -= 2 * offset * x.get(d);
            d.y1 -= 2 * offset * y.get(d);
          });
      }
      const width = 954;
      const height = 1600;
      const format = d3.format(",d");
      const color = d3.scaleSequential([9, 0], d3.interpolateMagma);

      const root = treemap(data);

      svg = d3
        .select("#nest-map")
        .attr("viewBox", [0, 0, width, height])
        .style("overflow", "visible")
        .style("font", "10px sans-serif");

      const shadow = faker.random.numeric()

      svg
        .append("filter")
        .attr("id", shadow.id)
        .append("feDropShadow")
        .attr("flood-opacity", 0.3)
        .attr("dx", 0)
        .attr("stdDeviation", 3);

      const node = svg
        .selectAll("g")
        .data(d3.group(root, (d) => d.height))
        .join("g")
        .attr("filter", shadow)
        .selectAll("g")
        .data((d) => d[1])
        .join("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

      node.append("title").text(
        (d) =>
          `${d
            .ancestors()
            .reverse()
            .map((d) => d.data.name)
            .join("/")}\n${format(d.value)}`
      );

      node
        .append("rect")
        .attr("id", (d) => (d.nodeUid = faker.random.numeric()))
        .attr("fill", (d) => color(d.height))
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0);

      node
        .append("clipPath")
        .attr("id", (d) => (d.clipUid = faker.random.numeric()))
        .append("use")
        .attr("xlink:href", (d) => d.nodeUid.href);

      node
        .append("text")
        .attr("clip-path", (d) => d.clipUid)
        .selectAll("tspan")
        .data((d) => d.data.name.split(/(?=[A-Z][^A-Z])/g).concat(format(d.value)))
        .join("tspan")
        .attr("fill-opacity", (d, i, nodes) => (i === nodes.length - 1 ? 0.7 : null))
        .text((d) => d);

      node
        .filter((d) => d.children)
        .selectAll("tspan")
        .attr("dx", 3)
        .attr("y", 13);

      node
        .filter((d) => !d.children)
        .selectAll("tspan")
        .attr("x", 3)
        .attr("y", (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`);

      return svg.node();
    },
    [data.length]
  );

  return (
    // <div style={{ color: "white" }}>
      <svg id="nest-map" ref={ref}></svg>
    // </div>
  );
};

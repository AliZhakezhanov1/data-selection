import React, { useEffect } from "react";
import * as d3 from "d3";
import { useD3 } from "./useD3";
import { faker } from "@faker-js/faker";
// import useWindowSize from "../../utils/useWindowSize";
export const Chord = ({ data }) => {
  const ref = useD3(
    (svg) => {
      // const names = ["anger", "scam", "launch" ];
       const names = Array.from(new Set(data.flatMap((d) => [d.source, d.target]))).sort(
        d3.ascending
      );


      const matrix = [
        [faker.random.numeric(), faker.random.numeric(), faker.random.numeric()],
        [faker.random.numeric(), faker.random.numeric(), faker.random.numeric()],
        [faker.random.numeric(), faker.random.numeric(), faker.random.numeric()],
      ];
      // const matrix = () => {
      //   const index = new Map(names.map((name, i) => [name, i]));
      //   const matrix = Array.from(index, () => new Array(names.length).fill(0));
      //   for (const { source, target, value } of data)
      //     matrix[index.get(source)][index.get(target)] += value;
      //   return matrix;
      // };
      const width = 954;
      const height = width;
      // const rename = (name) => name.substring(name.indexOf(".") + 1, name.lastIndexOf("."));
      const innerRadius = Math.min(width, height) * 0.5 - 90;
      const outerRadius = innerRadius + 10;
      const chord = d3
        .chordDirected()
        .padAngle(10 / innerRadius)
        .sortSubgroups(d3.descending)
        .sortChords(d3.descending);
      const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);
      const ribbon = d3
        .ribbonArrow()
        .radius(innerRadius - 1)
        .padAngle(1 / innerRadius);
     
      const color = d3.scaleOrdinal(names, d3.quantize(d3.interpolateRainbow, names.length));
      svg = d3.select("#chord").attr("viewBox", [-width / 2, -height / 2, width, height]);
      const chords = chord(matrix);

      const group = svg
        .append("g")
        .attr("font-size", 15)
        .attr("font-family", "sans-serif")
        .selectAll("g")
        .data(chords.groups)
        .join("g");

      group
        .append("path")
        .attr("fill", (d) => color(names[d.index]))
        .attr("d", arc);

      group
        .append("text")
        .each((d) => (d.angle = (d.startAngle + d.endAngle) / 2))
        .attr("dy", "0.35em")
        .attr(
          "transform",
          (d) => `
              rotate(${(d.angle * 180) / Math.PI - 90})
              translate(${outerRadius + 5})
              ${d.angle > Math.PI ? "rotate(180)" : ""}
            `
        )
        .attr("text-anchor", (d) => (d.angle > Math.PI ? "end" : null))
        .text((d) => names[d.index]);

      group.append("title").text(
        (d) => `${names[d.index]}
      ${d3.sum(chords, (c) => (c.source.index === d.index) * c.source.value)} outgoing →
      ${d3.sum(chords, (c) => (c.target.index === d.index) * c.source.value)} incoming ←`
      );

      svg
        .append("g")
        .attr("fill-opacity", .8)
        // .style('stroke','white')
        .selectAll("path")
        .data(chords)
        .join("path")
        // .style("mix-blend-mode", "lighten")
        .style("mix-blend-mode", "multiply")
        .attr("fill", (d) => color(names[d.target.index]))
        .attr("d", ribbon)
        .append("title")
        .text((d) => `${names[d.source.index]} → ${names[d.target.index]} ${d.source.value}`);

      return svg.node();
    },
    [data.length]
  );

  return (
    <div style={{ fill: "white"  }}>
      <svg id="chord" ref={ref}></svg>
    </div>
  );
};

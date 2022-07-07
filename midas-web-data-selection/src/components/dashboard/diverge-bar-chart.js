import React, { useEffect } from "react";
import * as d3 from "d3";
// import { faker } from "@faker-js/faker";
// import { useD3 } from "./useD3";

export const DivergeBar = ({ data , labelx }) => {
  const metric = "absolute"; // can change between absolut or relative
  function DivergingBarChart(
    data,
    {
      x = (d) => d, // given d in data, returns the (quantitative) x-value
      y = (d, i) => i, // given d in data, returns the (ordinal) y-value
      title, // given d in data, returns the title text
      marginTop = 70, // top margin, in pixels
      marginRight = 50, // right margin, in pixels
      marginBottom = 30, // bottom margin, in pixels
      marginLeft = 60, // left margin, in pixels
      width = 620, // outer width of chart, in pixels
      height = 620 , // the outer height of the chart, in pixels
      xType = d3.scaleLinear, // type of x-scale
      xDomain, // [xmin, xmax]
      xRange = [marginLeft, width - marginRight], // [left, right]
      xFormat, // a format specifier string for the x-axis
      xLabel, // a label for the x-axis
      yPadding = 0.1, // amount of y-range to reserve to separate bars
      yDomain, // an array of (ordinal) y-values
      yRange, // [top, bottom]
      colors = d3.schemePiYG[3], // [negative, …, positive] colors
    } = {}
  ) {
    // Compute values.
    const X = d3.map(data, x);
    const Y = d3.map(data, y);

    // Compute default domains, and unique the y-domain.
    if (xDomain === undefined) xDomain = d3.extent(X);
    if (yDomain === undefined) yDomain = Y;
    yDomain = new d3.InternSet(yDomain);

    // Omit any data not present in the y-domain.
    // Lookup the x-value for a given y-value.
    const I = d3.range(X.length).filter((i) => yDomain.has(Y[i]));
    const YX = d3.rollup(
      I,
      ([i]) => X[i],
      (i) => Y[i]
    );

    // Compute the default height.
    if (height === undefined)
      height = Math.ceil((yDomain.size + yPadding) * 25) + marginTop + marginBottom;
    if (yRange === undefined) yRange = [marginTop, height - marginBottom];

    // Construct scales, axes, and formats.
    const xScale = xType(xDomain, xRange);
    const yScale = d3.scaleBand(yDomain, yRange).padding(yPadding);
    const xAxis = d3.axisTop(xScale).ticks(width / 80, xFormat);
    const yAxis = d3.axisLeft(yScale).tickSize(0).tickPadding(6);
    const format = xScale.tickFormat(100, xFormat);

    // Compute titles.
    if (title === undefined) {
      title = (i) => `${Y[i]}\n${format(X[i])}`;
    } else if (title !== null) {
      const O = d3.map(data, (d) => d);
      const T = title;
      title = (i) => T(O[i], i, data);
    }

    const svg = d3
      .select("#diverge-bar")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

    svg
      .append("g")
      .attr("transform", `translate(0,${marginTop})`)
      .call(xAxis)
      .attr("font-size", 12)
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll(".tick line")
          .clone()
          .attr("y2", height - marginTop - marginBottom)
          .attr("stroke-opacity", 0.1)
      )
      .call((g) =>
        g
          .append("text")
          .attr("x", xScale(0))
          .attr("y", -30)
          .attr("fill", "white")
          .attr("text-anchor", "center")
          .text(xLabel)
          .attr("font-size", 15)
      );

    const bar = svg
      .append("g")
      .selectAll("rect")
      .data(I)
      .join("rect")
      .attr("fill", (i) => colors[X[i] > 0 ? colors.length - 1 : 0])
      .attr("x", (i) => Math.min(xScale(0), xScale(X[i])))
      .attr("y", (i) => yScale(Y[i]))
      .attr("width", (i) => Math.abs(xScale(X[i]) - xScale(0)))
      .attr("height", yScale.bandwidth());

    if (title) bar.append("title").text(title);

    svg
      .append("g")
      .attr("text-anchor", "end")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .selectAll("text")
      .data(I)
      .join("text")
      .style("fill", "white")
      .attr("text-anchor", (i) => (X[i] < 0 ? "end" : "start"))
      .attr("x", (i) => xScale(X[i]) + Math.sign(X[i] - 0) * 4)
      .attr("y", (i) => yScale(Y[i]) + yScale.bandwidth() / 2)
      .attr("dy", "0.35em")
      .text((i) => format(X[i]));

    svg
      .append("g")
      .attr("transform", `translate(${xScale(0)},0)`)
      .call(yAxis)
      .attr("font-size", 12)
      .call((g) =>
        g
          .selectAll(".tick text")
          .filter((y) => YX.get(y) < 0)
          .attr("text-anchor", "start")
          .attr("x", 6)
      );

    return svg.node();
  }

  const draw = async (data) => {
    const chart = DivergingBarChart(data, {
      x: metric === "absolute" ? (d) => d[2019] - d[2010] : (d) => d[2019] / d[2010] - 1,
      y: (d) => d.State,
      yDomain: d3.groupSort(
        data,
        ([d]) => d[2019] - d[2010],
        (d) => d.State
      ),
      xFormat: metric === "absolute" ? "+,d" : "+%",
      xLabel: labelx,
      // width : 500,
      marginRight: 80,
      marginLeft: 80,
      colors: d3.schemeRdBu[3],
    });
  };

  useEffect(() => {
    draw(data);
  }, [data.length]);

  return (
    <div style={{ color: "white"  }}>
      <svg id="diverge-bar"></svg>
    </div>
  );
};

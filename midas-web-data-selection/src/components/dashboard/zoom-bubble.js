import React, { useEffect } from "react";
import * as d3 from "d3";
import useWindowSize from "../../utils/useWindowSize";
export const ZoomBubble = ({ data }) => {
  const [width, height] = useWindowSize();
  function Pack(
    data,
    {
      // // data is either tabular (array of objects) or hierarchy (nested objects)
      // path, // as an alternative to id and parentId, returns an array identifier, imputing internal nodes
      // id = Array.isArray(data) ? (d) => d.id : null, // if tabular data, given a d in data, returns a unique identifier (string)
      // parentId = Array.isArray(data) ? (d) => d.parentId : null, // if tabular data, given a node d, returns its parent’s identifier
      // children, // if hierarchical data, given a d in data, returns its children
      // value, // given a node d, returns a quantitative value (for area encoding; null for count)
      // sort = (a, b) => d3.descending(a.value, b.value), // how to sort nodes prior to layout
      // label, // given a leaf node d, returns the display name
      // title, // given a node d, returns its hover text
      // link, // given a node d, its link (if any)
      // linkTarget = "_blank", // the target attribute for links, if any
      width = 932, // outer width, in pixels
      height = width, // outer height, in pixels
      // margin = 1, // shorthand for margins
      // marginTop = margin, // top margin, in pixels
      // marginRight = margin, // right margin, in pixels
      // marginBottom = margin, // bottom margin, in pixels
      // marginLeft = margin, // left margin, in pixels
      // padding = 3, // separation between circles
      // fill = "#ddd", // fill for leaf circles
      // fillOpacity, // fill opacity for leaf circles
      // stroke = "#bbb", // stroke for internal circles
      // strokeWidth, // stroke width for internal circles
      // strokeOpacity, // stroke opacity for internal circles
      color = d3
        .scaleLinear()
        .domain([0, 3])
        .range(["hsl(228,20%,30%)", "hsl(230,30%,40%)"])
        .interpolate(d3.interpolateHcl),
    } = {}
  ) {
    // If id and parentId options are specified, or the path option, use d3.stratify
    // to convert tabular data to a hierarchy; otherwise we assume that the data is
    // specified as an object {children} with nested objects (a.k.a. the “flare.json”
    // format), and use d3.hierarchy.
    const pack = (data) =>
      d3.pack().size([width, height]).padding(3)(
        d3
          .hierarchy(data)
          .sum((d) => d.value)
          .sort((a, b) => b.value - a.value)
      );

    const root = pack(data);
    let focus = root;
    let view;

    const svg = d3
      .select("#zoom")
      .attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
      .style("display", "block")
      .style("margin", "0 -14px")
      // .style("background", "#212121")
      .style("cursor", "pointer")
      .on("click", (event) => zoom(event, root));

    const node = svg
      .append("g")
      .selectAll("circle")
      .data(root.descendants().slice(1))
      .join("circle")
      .attr("fill", (d) => (d.children ? color(d.depth) : "white")) //white -> no children
      .attr("pointer-events", (d) => (!d.children ? "none" : null))
      .on("mouseover", function () {
        d3.select(this).attr("stroke", "#000");
      })
      .on("mouseout", function () {
        d3.select(this).attr("stroke", null);
      })
      .on("click", (event, d) => focus !== d && (zoom(event, d), event.stopPropagation()));

    const label = svg
      .append("g")
      .style("font", "19px sans-serif")
      .style("fill", "black")
      .style("font-weight", "500")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(root.descendants())
      .join("text")
      .style("fill-opacity", (d) => (d.parent === root ? 1 : 0))
      .style("display", (d) => (d.parent === root ? "inline" : "none"))
      .text((d) => d.data.name);

    zoomTo([root.x, root.y, root.r * 2]);

    function zoomTo(v) {
      const k = width / v[2];

      view = v;

      label.attr("transform", (d) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
      node.attr("transform", (d) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
      node.attr("r", (d) => d.r * k);
    }

    function zoom(event, d) {
      const focus0 = focus;

      focus = d;

      const transition = svg
        .transition()
        .duration(event.altKey ? 7500 : 750)
        .tween("zoom", (d) => {
          const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
          return (t) => zoomTo(i(t));
        });

      label
        .filter(function (d) {
          return d.parent === focus || this.style.display === "inline";
        })
        .transition(transition)
        .style("fill-opacity", (d) => (d.parent === focus ? 1 : 0))
        .on("start", function (d) {
          if (d.parent === focus) this.style.display = "inline";
        })
        .on("end", function (d) {
          if (d.parent !== focus) this.style.display = "none";
        });
    }

    return svg.node();
  }

  const draw = async (data) => {
    const chart = Pack(data, {});
  };

  useEffect(() => {
    draw(data);
    return () => {};
  }, [data.length]);
  return <svg id="zoom" style={{ width: "100%", height: height }}></svg>;
};

import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { ZoomBubble } from "./dashboard/zoom-bubble";
import { Tree } from "./dashboard/tree-view";
import SampleSelect from "./sample-select";
import { IndentTree } from "./dashboard/tree-indent";
import { ZoomTreeMap } from "./dashboard/zoomable-tree-map";
import Bubbles from "./dashboard/bubble";
import { ZoomSunburst } from "./dashboard/zoomable-sunburst";
import { ZoomIcicle } from "./dashboard/zoomable-icicle";
import { RadialTree } from "./dashboard/radial-tree";
import { NestMap } from "./dashboard/nested-treemap";
export const OverView = ({ data }) => {
  const [view, setView] = useState<string>("bubbles");
  const handleViewChange = (event: SelectChangeEvent) => {
    setView(event.target.value);
  };
  const showZoomBubble = useCallback(() => {
    return <div>{view === "zoom-bubbles" && <ZoomBubble data={data} />} </div>;
  }, [view, data]);
  const showTree = useCallback(() => {
    return <div> {view === "tree" && <Tree data={data} />} </div>;
  }, [view, data]);
  const showIndent = useCallback(() => {
    return <div> {view === "indent" && <IndentTree data={data} />} </div>;
  }, [view, data]);
  // const showBar = useCallback(() => {
  //   return <div> {view === "bar" && <TreeChart data={data} />} </div>;
  // }, [view,data]);
  const showMap = useCallback(() => {
    return <div> {view === "map" && <ZoomTreeMap data={data} />} </div>;
  }, [view, data]);
  const showBubble = useCallback(() => {
    return <div> {view === "bubbles" && <Bubbles />} </div>;
  }, [view]);
  const showSunburst = useCallback(() => {
    return <div> {view === "sunburst" && <ZoomSunburst data={data} />} </div>;
  }, [view, data]);
  const showIcicle = useCallback(() => {
    return <div> {view === "icicle" && <ZoomIcicle data={data} />} </div>;
  }, [view, data]);
  const showRadialTree = useCallback(() => {
    return <div> {view === "radial-tree" && <RadialTree data={data} />} </div>;
  }, [view, data]);
  const showNestMap = useCallback(() => {
    return <div> {view === "nest-map" && <NestMap data={data} />} </div>;
  }, [view, data]);
  const selectView = useCallback(() => {
    return (
      <FormControl sx={{ m: 0.5, width: 150 }}>
        <InputLabel id="selectView">View</InputLabel>
        <Select
          color="warning"
          labelId="view"
          id="select-view"
          value={view}
          label="*view"
          onChange={handleViewChange}
          renderValue={(selected) => <p style={{ color: "white" }}>{selected}</p>}
        >
          {views.map((name) => (
            <MenuItem key={name} value={name}>
              {/* <Checkbox checked={publication.indexOf(name) > -1} /> */}
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
        {/* <FormHelperText>Required</FormHelperText> */}
      </FormControl>
    );
  }, [view]);
  return (
    <div style={{ width: "100%", backgroundColor: "#212124" }}>
      <Typography variant="h3" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
        Entity Overview
      </Typography>
      <Box sx={{ mb: 1, mt: 0.5 }} display="flex" justifyContent="flex-start">
        <SampleSelect page="company-overview" />
        {selectView()}
        <Button variant="outlined" color="warning" sx={{ px: 5, ml: 1, mr: 1 }}>
          Update
        </Button>
        <Button variant="outlined" color="warning" sx={{ px: 4, mr: 1 }}>
          Compare
        </Button>
      </Box>
      <Divider />
      {showBubble()}
      {showZoomBubble()}
      {showTree()}
      {showIndent()}
      {/* {showBar()} */}
      {showMap()}
      {showIcicle()}
      {showSunburst()}
      {showNestMap()}
      {showRadialTree()}
    </div>
  );
};

const views = [
  "bubbles",
  "zoom-bubbles",
  "tree",
  "radial-tree",
  "indent",
  "sunburst",
  "icicle",
  "nest-map",
];

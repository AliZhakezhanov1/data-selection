import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Checkbox, ListItemText } from "@mui/material";

// const ITEM_HEIGHT = 20;
// const ITEM_PADDING_TOP = 2;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       maxWidth: 250,
//     },
//   },
// };
type propType = {
  component: "compare" | "time" | "";
};
export default function CardSelect({ component }: propType) {
  const [x, setX] = React.useState<string[]>([]);
  const [y, setY] = React.useState<string[]>([]);

    const xAxis = React.useCallback(() => {
      const handleIndustryChange = (event: SelectChangeEvent<typeof x>) => {
        const {
          target: { value },
        } = event;
        setX(
          // On autofill we get a stringified value.
          typeof value === "string" ? value.split(",") : value
        );
      };
      return (
      <FormControl>
        <InputLabel id="industry" 
        sx={{ fontSize: 10, color: "white" }}>
          x-axis
        </InputLabel>
        <Select
          labelId="x-axis"
          id="select-x-axis"
          //   multiple
          value={x}
          sx={{ width: 80, height: 40 }}
          color="warning"
          onChange={handleIndustryChange}
          input={<OutlinedInput label="x-axis" />}
          renderValue={(selected) => selected.join(", ")}
          // MenuProps={MenuProps}
        >
          {component === "compare" ? (
            <div>
              {xAxisCompare.map((name) => (
                <MenuItem key={name} value={name}>
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </div>
          ) : (
            <div>
              {xAxisTime.map((name) => (
                <MenuItem key={name} value={name}>
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </div>
          )}
        </Select>
      </FormControl>
    );
  }, [component,x]);

  const yAxis = React.useCallback(() => {
    const handleSectionChange = (event: SelectChangeEvent<typeof y>) => {
      const {
        target: { value },
      } = event;
      setY(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
        );
      };
      
    return (
      <FormControl>
        <InputLabel id="section" 
        sx={{ fontSize: 10, ml: 1, color: "white" }}>
          y-axis
        </InputLabel>
        <Select
          labelId="y-axis"
          id="select-y-axis"
          //   multiple
          value={y}
          sx={{ width: 80, height: 40, ml: 1 }}
          color="warning"
          onChange={handleSectionChange}
          input={<OutlinedInput label="y-axis" />}
          renderValue={(selected) => selected.join(", ")}
          // MenuProps={MenuProps}
        >
          {component === "compare" ? (
            <div>
              {yAxisCompare.map((name) => (
                <MenuItem key={name} value={name}>
                  {/* <Checkbox checked={section.indexOf(name) > -1} /> */}
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </div>
          ) : (
            <div>
              {yAxisTime.map((name) => (
                <MenuItem key={name} value={name}>
                  {/* <Checkbox checked={section.indexOf(name) > -1} /> */}
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </div>
          )}
        </Select>
      </FormControl>
    );
  }, [component,y]);

  return (
    <div>
      {xAxis()}
      {yAxis()}
    </div>
  );
}
const xAxisCompare = ["Trust", "Anger", "Happy", "Sadness", "Surprise", "Curious", "Disgust"];
//change section after select industries
const yAxisCompare = ["Revenue", "Stock Price", "Investments", "Selling rate", "Likeability"];

const xAxisTime = ["Year", "Month", "Week", "Day"];
const yAxisTime = ["Emotions", "Revenue", "Media Coverage"];

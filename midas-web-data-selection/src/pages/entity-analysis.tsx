import Head from "next/head";
import { DashboardLayout } from "../components/dashboard-layout";
// import { TreeChart } from "../components/dashboard/tree-bar-chart";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { faker } from "@faker-js/faker";
import { DirectedGraph } from "../components/dashboard/directed-graph";
import { KernelDensity } from "../components/dashboard/kernel-density";
import { StackBar } from "../components/dashboard/stack-bar-chart";
import { GroupBar } from "../components/dashboard/group-bar-chart";
import SampleSelect from "../components/sample-select";
import { LineTip } from "../components/dashboard/line-tooltip";
import { Pie } from "../components/dashboard/pie-chart";
const EntityAnalysis = () => (
  <div style={{ backgroundColor: "#212124", height: "100%" }}>
    <Head>
      <title>Midas Entity Analysis</title>
    </Head>

    <Typography variant="h3" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
      Entity Analysis
    </Typography>
    <Box display="flex" sx={{ mb: 1 }}>
      <SampleSelect page="entity-analysis" />
      <Button variant="outlined" color="warning" sx={{ px: 4, ml: 1, mr: 1 }}>
        Update
      </Button>
    </Box>
    <Divider></Divider>

    <Box sx={{ flexDirection: "row", mt: 2 }} display="flex">
      <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2 }}>
        <Typography
          variant="h6"
          fontWeight={300}
          color="goldenrod"
          align="center"
          sx={{ mb: 2, mt: 2 }}
        >
          Entity Spendings
        </Typography>
        <Divider />
        <CardContent>
          <Typography variant="h4" fontWeight={300} color="goldenrod" align="center">
            ${faker.datatype.number({ min: 1000000 })}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="outlined" color="secondary" sx={{ fontSize: 10 }}>
            details
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2, mr: 2 }}>
        <Typography
          variant="h6"
          fontWeight={300}
          color="goldenrod"
          align="center"
          sx={{ mb: 2, mt: 2 }}
        >
          Articles Mentioned
        </Typography>
        <Divider />
        <CardContent>
          <Typography variant="h4" fontWeight={300} color="goldenrod" align="center">
            {faker.datatype.number({ max: 1000 })}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="outlined" color="secondary" sx={{ fontSize: 10 }}>
            details
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2, mr: 2 }}>
        <Typography
          variant="h6"
          fontWeight={300}
          color="goldenrod"
          align="center"
          sx={{ mb: 2, mt: 2 }}
        >
          Stock Performances
        </Typography>
        <Divider />
        <CardContent>
          <Typography variant="h4" fontWeight={300} color="goldenrod" align="center">
            ${faker.datatype.number({ max: 20 })}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="outlined" color="secondary" sx={{ fontSize: 10 }}>
            details
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2, mr: 2 }}>
        <Typography
          variant="h6"
          fontWeight={300}
          color="goldenrod"
          align="center"
          sx={{ mb: 2, mt: 2 }}
        >
          Product Sales 
        </Typography>
        <Divider />
        <CardContent>
          <Typography variant="h4" fontWeight={300} color="goldenrod" align="center">
            {faker.datatype.number({ min: 10000 })}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="outlined" color="secondary" sx={{ fontSize: 10 }}>
            details
          </Button>
        </CardActions>
      </Card>
    </Box>

    <Box sx={{ flexDirection: "row", mt: 2 }} display="flex">
      <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2 }}>
        <Typography
          variant="h6"
  
          color="goldenrod"
          align="center"
          sx={{ mb: 2, mt: 2 }}
        >
          Entity Relations
        </Typography>
        <Divider />
        <CardContent>
          <DirectedGraph data={graph}></DirectedGraph>
        </CardContent>
      </Card>

      <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2, mr: 2 }}>
        <Typography variant="h6" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
          PDF Estimation
        </Typography>
        <Divider />
        <CardContent>
          <KernelDensity data={density}></KernelDensity>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end", mt: -3, mb: 0.5 }}>
          <Button variant="outlined" color="primary" sx={{ fontSize: 10 }}>
            custom
          </Button>
        </CardActions>
      </Card>
    </Box>
    <Box sx={{ flexDirection: "row", mt: 2 }} display="flex">
      <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2 }}>
        <Typography variant="h6" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
          Emotions Over Month (stack bar)
        </Typography>
        <Divider />
        <CardContent>
          <StackBar data={stackStates}></StackBar>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end", mt: -3, mb: 0.5 }}>
          <Button variant="outlined" color="primary" sx={{ fontSize: 10 }}>
            custom
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2, mr: 2 }}>
        <Typography variant="h6" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
          Emotions Over Month (group bar)
        </Typography>
        <Divider />
        <CardContent>
          <GroupBar data={stackStates}></GroupBar>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end", mt: -3, mb: 0.5 }}>
          <Button variant="outlined" color="primary" sx={{ fontSize: 10 }}>
            custom
          </Button>
        </CardActions>
      </Card>
    </Box>
    <Box sx={{ flexDirection: "row", mt: 2 }} display="flex">
      <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2 }}>
        <Typography variant="h6" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
          Entity Credibilities Over Month
        </Typography>
        <Divider />
        <CardContent>
          <LineTip data={line}></LineTip>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end", mt: -3, mb: 0.5 }}>
          <Button variant="outlined" color="primary" sx={{ fontSize: 10 }}>
            custom
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2, mr: 2 }}>
        <Typography variant="h6" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
          Entity Emotional Distribution
        </Typography>
        <Divider />
        <CardContent>
          <Pie data={emotions}></Pie>
        </CardContent>
      </Card>
    </Box>
  </div>
);

EntityAnalysis.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default EntityAnalysis;
const line = [
  {
    date: new Date("2022-02-05T02:09:35.077Z"),
    close: faker.datatype.number({ max: 10, precision: 0.01 }),
  },
  {
    date: new Date("2022-02-06T02:09:35.077Z"),
    close: faker.datatype.number({ max: 10, precision: 0.01 }),
  },
  {
    date: new Date("2022-02-07T01:09:35.077Z"),
    close: faker.datatype.number({ max: 10, precision: 0.01 }),
  },
  {
    date: new Date("2022-02-08T08:09:35.077Z"),
    close: faker.datatype.number({ max: 10, precision: 0.01 }),
  },
  {
    date: new Date("2022-02-09T02:09:35.077Z"),
    close: faker.datatype.number({ max: 10, precision: 0.01 }),
  },
  {
    date: new Date("2022-02-10T07:09:35.077Z"),
    close: faker.datatype.number({ max: 10, precision: 0.01 }),
  },
  {
    date: new Date("2022-02-11T02:09:35.077Z"),
    close: faker.datatype.number({ max: 10, precision: 0.01 }),
  },
  {
    date: new Date("2022-02-12T04:09:35.077Z"),
    close: faker.datatype.number({ max: 10, precision: 0.01 }),
  },
  {
    date: new Date("2022-02-13T02:09:35.077Z"),
    close: faker.datatype.number({ max: 10, precision: 0.01 }),
  },
];

const emotions = [
  { name: "happy", value: faker.datatype.number() },
  { name: "sad", value: faker.datatype.number() },
  { name: "anger", value: faker.datatype.number() },
  { name: "surprise", value: faker.datatype.number() },
  { name: "disgust", value: faker.datatype.number() },
  { name: "anticipation", value: faker.datatype.number() },
  // { name: "happy", value: faker.datatype.number() },
];

const graph = {
  nodes: [{ id: "microsoft" }, { id: "amazon" }, { id: "htc" }, { id: "apple" }, { id: "midas" }],
  links: [
    { source: "apple", target: "midas", type: "software" },
    { source: "microsoft", target: "amazon", type: "internet" },
    { source: "midas", target: "htc", type: "software" },
    { source: "htc", target: "microsoft", type: "hardware" },
    { source: "htc", target: "apple", type: "hardware" },
  ],
};

const stackStates = [
  {
    name: faker.date.month(),
    happy: faker.datatype.number(),
    sad: faker.datatype.number(),
    anger: faker.datatype.number(),
    excitement: faker.datatype.number(),
  },
  {
    name: faker.date.month(),
    happy: faker.datatype.number(),
    sad: faker.datatype.number(),
    anger: faker.datatype.number(),
    excitement: faker.datatype.number(),
  },
  {
    name: faker.date.month(),
    happy: faker.datatype.number(),
    sad: faker.datatype.number(),
    anger: faker.datatype.number(),
    excitement: faker.datatype.number(),
  },
  {
    name: faker.date.month(),
    happy: faker.datatype.number(),
    sad: faker.datatype.number(),
    anger: faker.datatype.number(),
    excitement: faker.datatype.number(),
  },
  {
    name: faker.date.month(),
    happy: faker.datatype.number(),
    sad: faker.datatype.number(),
    anger: faker.datatype.number(),
    excitement: faker.datatype.number(),
  },
];

const density = [
  faker.datatype.number({ max: 100, min: 0 }),
  faker.datatype.number({ max: 100, min: 0 }),
  faker.datatype.number({ max: 100, min: 0 }),
  faker.datatype.number({ max: 100, min: 0 }),
  faker.datatype.number({ max: 100, min: 0 }),
  faker.datatype.number({ max: 100, min: 0 }),
  faker.datatype.number({ max: 100, min: 0 }),
  faker.datatype.number({ max: 100, min: 0 }),
  faker.datatype.number({ max: 100, min: 0 }),
];

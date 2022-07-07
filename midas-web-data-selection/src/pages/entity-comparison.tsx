import Head from "next/head";
import { DashboardLayout } from "../components/dashboard-layout";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { Scatter } from "../components/dashboard/scatter";
import { Box } from "@mui/system";
import { faker } from "@faker-js/faker";
import { BarChartTransition } from "../components/dashboard/bar-chart-transitions";
import { Boxplot } from "../components/dashboard/box-plot";
import { ScatterConnect } from "../components/dashboard/scatter-connect";
import { Trend } from "../components/dashboard/trend";
import { DivergeBar } from "../components/dashboard/diverge-bar-chart";
import { ZoomBarChart } from "../components/dashboard/zoomable-bar-chart";
import { StackBarNormalize } from "../components/dashboard/stack-bar-chart-normalize";
import SampleSelect from "../components/sample-select";
import CardSelect from "../components/card-select";
import { Legend } from "../components/dashboard/legend";
const EntityComparison = () => (
  <div style={{ backgroundColor: "#212124", height: "100%" }}>
    <Head>
      <title>Midas Entity Comparisons</title>
    </Head>
    <Typography variant="h3" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
    Entity Comparisons
    </Typography>
    <Box display="flex" sx={{ mb: 1 }}>
      <SampleSelect page='industry-analysis'></SampleSelect>
      <Button variant="outlined" color="warning" sx={{ px: 4, ml: 1, mr: 1 }}>
        Update
      </Button>
    </Box>
    <Divider />

    <Box sx={{ flexDirection: "row", mt: 2 }} display="flex">
      <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2 }}>
        <Typography variant="h6" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
          Scatter Plot
        </Typography>
        <Divider />
        <CardContent>
          <Scatter labelx="Trust" labely="Revenue" data={dummy} />
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "flex-end", mt: -3, mb: 1 }}
  
        ><CardSelect component="compare"></CardSelect></CardActions>
      </Card>
      <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2, mr: 2 }}>
        <Typography variant="h6" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
          Bar Chart
        </Typography>
        <Divider />
        <CardContent>
          <BarChartTransition data={bl} labely="Likeability"></BarChartTransition>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "flex-end", mt: -3, mb: 1 }}
  
        ><CardSelect component="compare"></CardSelect></CardActions>
      </Card>
    </Box>

    <Box sx={{ flexDirection: "row", mt: 2 }} display="flex">
      <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2 }}>
        <Typography variant="h6" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
          Scatter Connect
        </Typography>
        <Divider />
        <CardContent>
          <ScatterConnect data={driving} labelx="Credibility" labely="Stock Price"></ScatterConnect>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "flex-end", mt: -3, mb: 1 }}
  
        ><CardSelect component="compare"></CardSelect></CardActions>
      </Card>
      <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2, mr: 2 }}>
        <Typography variant="h6" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
          Box Plot
        </Typography>
        <Divider></Divider>
        <CardContent>
          <Boxplot data={diamonds} labelx="Fear →" labely="Revenue"></Boxplot>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "flex-end", mt: -3, mb: 1 }}
  
        ><CardSelect component="compare"></CardSelect></CardActions>
      </Card>
    </Box>

    <Box sx={{ flexDirection: "row", mt: 2 }} display="flex">
      <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2 }}>
        <Typography variant="h6" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
          Trend Analysis
        </Typography>
        <Divider></Divider>
        <CardContent>
          <Trend data={temperature} labely="Credibilty"></Trend>
        </CardContent>
      </Card>
      <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2, mr: 2 }}>
        <Typography variant="h6" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
          Diverge Bar Chart
        </Typography>
        <Divider></Divider>
        <CardContent>
          <DivergeBar
            data={states}
            labelx="← Decrease · Change in Credibility · Increase →"
          ></DivergeBar>
        </CardContent>
      </Card>
    </Box>

    <Box sx={{ flexDirection: "row", mt: 2 }} display="flex">
      <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2 }}>
        <Typography variant="h6" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
          Zoomable Bar chart
        </Typography>
        <Divider></Divider>
        <CardContent>
          <ZoomBarChart data={bl}></ZoomBarChart>
        </CardContent>
      </Card>
      <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2, mr: 2 }}>
        <Typography variant="h6" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
          Stack Emotional Compariosns
        </Typography>
        <Divider></Divider>
        <CardContent>
          <StackBarNormalize data={norstate}></StackBarNormalize>
        </CardContent>
      </Card>
    </Box>
  </div>
);

EntityComparison.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default EntityComparison;

const dummy = [
  {
    name: faker.company.companyName(),
    trust: faker.datatype.number({ max: 1, precision: 0.01 }),
    revenue: faker.datatype.number(),
  },
  {
    name: faker.company.companyName(),
    trust: faker.datatype.number({ max: 1, precision: 0.01 }),
    revenue: faker.datatype.number(),
  },
  {
    name: faker.company.companyName(),
    trust: faker.datatype.number({ max: 1, precision: 0.01 }),
    revenue: faker.datatype.number(),
  },
  {
    name: faker.company.companyName(),
    trust: faker.datatype.number({ max: 1, precision: 0.01 }),
    revenue: faker.datatype.number(),
  },
  {
    name: faker.company.companyName(),
    trust: faker.datatype.number({ max: 1, precision: 0.01 }),
    revenue: faker.datatype.number(),
  },
  {
    name: faker.company.companyName(),
    trust: faker.datatype.number({ max: 1, precision: 0.01 }),
    revenue: faker.datatype.number(),
  },
  {
    name: faker.company.companyName(),
    trust: faker.datatype.number({ max: 1, precision: 0.01 }),
    revenue: faker.datatype.number(),
  },
];

const diamonds = [
  {
    carat: faker.datatype.number({ max: 1, precision: 0.01 }),
    price: faker.datatype.number({ max: 1000 }),
  },
  {
    carat: faker.datatype.number({ max: 1, precision: 0.01 }),
    price: faker.datatype.number({ max: 1000 }),
  },
  {
    carat: faker.datatype.number({ max: 1, precision: 0.01 }),
    price: faker.datatype.number({ max: 1000 }),
  },
  {
    carat: faker.datatype.number({ max: 1, precision: 0.01 }),
    price: faker.datatype.number({ max: 1000 }),
  },
  {
    carat: faker.datatype.number({ max: 1, precision: 0.01 }),
    price: faker.datatype.number({ max: 1000 }),
  },
  {
    carat: faker.datatype.number({ max: 1, precision: 0.01 }),
    price: faker.datatype.number({ max: 1000 }),
  },
  {
    carat: faker.datatype.number({ max: 1, precision: 0.01 }),
    price: faker.datatype.number({ max: 1000 }),
  },
  {
    carat: faker.datatype.number({ max: 1, precision: 0.01 }),
    price: faker.datatype.number({ max: 1000 }),
  },
  {
    carat: faker.datatype.number({ max: 1, precision: 0.01 }),
    price: faker.datatype.number({ max: 1000 }),
  },
  {
    carat: faker.datatype.number({ max: 1, precision: 0.01 }),
    price: faker.datatype.number({ max: 1000 }),
  },
];
const driving = [
  {
    side: "left",
    year: 2008,
    x: faker.datatype.number({ max: 1, precision: 0.01 }),
    y: faker.datatype.number({ max: 10, precision: 0.01 }),
  },
  {
    side: "right",
    year: 2009,
    x: faker.datatype.number({ max: 1, precision: 0.01 }),
    y: faker.datatype.number({ max: 10, precision: 0.01 }),
  },
  {
    side: "top",
    year: 2010,
    x: faker.datatype.number({ max: 1, precision: 0.01 }),
    y: faker.datatype.number({ max: 10, precision: 0.01 }),
  },
  {
    side: "bottom",
    year: 2011,
    x: faker.datatype.number({ max: 1, precision: 0.01 }),
    y: faker.datatype.number({ max: 10, precision: 0.01 }),
  },
  {
    side: "right",
    year: 2012,
    x: faker.datatype.number({ max: 1, precision: 0.01 }),
    y: faker.datatype.number({ max: 10, precision: 0.01 }),
  },
  {
    side: "top",
    year: 2013,
    x: faker.datatype.number({ max: 1, precision: 0.01 }),
    y: faker.datatype.number({ max: 10, precision: 0.01 }),
  },
  {
    side: "bottom",
    year: 2014,
    x: faker.datatype.number({ max: 1, precision: 0.01 }),
    y: faker.datatype.number({ max: 10, precision: 0.01 }),
  },
  {
    side: "right",
    year: 2015,
    x: faker.datatype.number({ max: 1, precision: 0.01 }),
    y: faker.datatype.number({ max: 10, precision: 0.01 }),
  },
  {
    side: "left",
    year: 2016,
    x: faker.datatype.number({ max: 1, precision: 0.01 }),
    y: faker.datatype.number({ max: 10, precision: 0.01 }),
  },
  {
    side: "top",
    year: 2017,
    x: faker.datatype.number({ max: 1, precision: 0.01 }),
    y: faker.datatype.number({ max: 10, precision: 0.01 }),
  },
];

const temperature = [
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { date: faker.date.recent(10), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
];

const states = [
  {
    2010: faker.datatype.number({ max: 1000 }),
    2019: faker.datatype.number({ max: 1000 }),
    State: faker.company.companyName(),
  },
  {
    2010: faker.datatype.number({ max: 1000 }),
    2019: faker.datatype.number({ max: 1000 }),
    State: faker.company.companyName(),
  },
  {
    2010: faker.datatype.number({ max: 1000 }),
    2019: faker.datatype.number({ max: 1000 }),
    State: faker.company.companyName(),
  },
  {
    2010: faker.datatype.number({ max: 1000 }),
    2019: faker.datatype.number({ max: 1000 }),
    State: faker.company.companyName(),
  },
  {
    2010: faker.datatype.number({ max: 1000 }),
    2019: faker.datatype.number({ max: 1000 }),
    State: faker.company.companyName(),
  },
  {
    2010: faker.datatype.number({ max: 1000 }),
    2019: faker.datatype.number({ max: 1000 }),
    State: faker.company.companyName(),
  },
  {
    2010: faker.datatype.number({ max: 1000 }),
    2019: faker.datatype.number({ max: 1000 }),
    State: faker.company.companyName(),
  },
  {
    2010: faker.datatype.number({ max: 1000 }),
    2019: faker.datatype.number({ max: 1000 }),
    State: faker.company.companyName(),
  },
  {
    2010: faker.datatype.number({ max: 1000 }),
    2019: faker.datatype.number({ max: 1000 }),
    State: faker.company.companyName(),
  },
  {
    2010: faker.datatype.number({ max: 1000 }),
    2019: faker.datatype.number({ max: 1000 }),
    State: faker.company.companyName(),
  },
];

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

const bl = [
  { name: faker.name.suffix(), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { name: faker.name.suffix(), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { name: faker.name.suffix(), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { name: faker.name.suffix(), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { name: faker.name.suffix(), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { name: faker.name.suffix(), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { name: faker.name.suffix(), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { name: faker.name.suffix(), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { name: faker.name.suffix(), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { name: faker.name.suffix(), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { name: faker.name.suffix(), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { name: faker.name.suffix(), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { name: faker.name.suffix(), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { name: faker.name.suffix(), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { name: faker.name.suffix(), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
  { name: faker.name.suffix(), value: faker.datatype.number({ max: 1, precision: 0.01 }) },
];

const norstate = [
  {
    name: faker.company.companyName(),
    happy: faker.datatype.number(),
    sad: faker.datatype.number(),
    anger: faker.datatype.number(),
    excitement: faker.datatype.number(),
  },
  {
    name: faker.company.companyName(),
    happy: faker.datatype.number(),
    sad: faker.datatype.number(),
    anger: faker.datatype.number(),
    excitement: faker.datatype.number(),
  },
  {
    name: faker.company.companyName(),
    happy: faker.datatype.number(),
    sad: faker.datatype.number(),
    anger: faker.datatype.number(),
    excitement: faker.datatype.number(),
  },
  {
    name: faker.company.companyName(),
    happy: faker.datatype.number(),
    sad: faker.datatype.number(),
    anger: faker.datatype.number(),
    excitement: faker.datatype.number(),
  },
  {
    name: faker.company.companyName(),
    happy: faker.datatype.number(),
    sad: faker.datatype.number(),
    anger: faker.datatype.number(),
    excitement: faker.datatype.number(),
  },
  {
    name: faker.company.companyName(),
    happy: faker.datatype.number(),
    sad: faker.datatype.number(),
    anger: faker.datatype.number(),
    excitement: faker.datatype.number(),
  },
  {
    name: faker.company.companyName(),
    happy: faker.datatype.number(),
    sad: faker.datatype.number(),
    anger: faker.datatype.number(),
    excitement: faker.datatype.number(),
  },
  {
    name: faker.company.companyName(),
    happy: faker.datatype.number(),
    sad: faker.datatype.number(),
    anger: faker.datatype.number(),
    excitement: faker.datatype.number(),
  },
  {
    name: faker.company.companyName(),
    happy: faker.datatype.number(),
    sad: faker.datatype.number(),
    anger: faker.datatype.number(),
    excitement: faker.datatype.number(),
  },
];

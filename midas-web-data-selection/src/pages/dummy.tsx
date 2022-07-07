import Head from "next/head";
// import { OverView } from "../components/dashboard/overview";
import { DashboardLayout } from "../components/dashboard-layout";
// import { TreeChart } from "../components/dashboard/tree-bar-chart";
// import { Button, Card, Divider, Typography } from "@mui/material";
import { Scatter } from "../components/dashboard/scatter";
// import { Box } from "@mui/system";
// import useWindowSize from "../utils/useWindowSize";
// import { Demo } from "../components/dashboard/c3-demo";
import { faker } from "@faker-js/faker";
import dynamic from "next/dynamic";
import { Chord } from "../components/dashboard/chord-diagram";
// import { PannableBar } from "../components/dashboard/pannable-bar";
import { StackBarDiverge } from "../components/dashboard/stack-bar-chart-diverge";
import { CalendarView } from "../components/dashboard/calendar";
import { LineTip } from "../components/dashboard/line-tooltip";
import { AreaDiff } from "../components/dashboard/area-diff";
import { StreamGraph } from "../components/dashboard/stream-graph";
import { Pie } from "../components/dashboard/pie-chart";
import { LineTime } from "../components/dashboard/line-time";
const C3Demo = dynamic(() => import("../components/dashboard/c3-demo"), {
  ssr: false,
});

const Dummy = () => {
  // const [width, height] = useWindowSize();
  return (
    <div style={{ backgroundColor: "#212124", height: "100%" }}>
      <Head>
        <title>midas analytics graph bank</title>
      </Head>

      {/* <PannableBar data={temperature}></PannableBar> */}
      <Chord data={chord}></Chord>
      {/* <StackBarDiverge data={politifact}></StackBarDiverge> */}
      {/* <CalendarView data={dji}></CalendarView> */}
      <AreaDiff data={areadiff}></AreaDiff>
      <StreamGraph data={stream}></StreamGraph>
      <LineTip data={line}></LineTip>
      <Pie data={emotions}></Pie>
      <LineTime data={lineTime}></LineTime>
    </div>
  );
};

Dummy.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dummy;

const emotions = [
  { name: "happy", value: faker.datatype.number() },
  { name: "sad", value: faker.datatype.number() },
  { name: "anger", value: faker.datatype.number() },
  { name: "surprise", value: faker.datatype.number() },
  { name: "disgust", value: faker.datatype.number() },
  { name: "anticipation", value: faker.datatype.number() },
  // { name: "happy", value: faker.datatype.number() },
];
const chord = [
  { source: "anger", target: "scam", value: faker.datatype.number() },
  { source: "launch", target: "anger", value: faker.datatype.number() },
  { source: "scam", target: "launch", value: faker.datatype.number() },
  // { source: "excitement", target: "launch", value: faker.datatype.number() },
  // { source: "anger", target: "sad", value: faker.datatype.number() },
];

const lineTime = [
  { date: new Date("2022-02-05T02:09:35.077Z"), value: faker.datatype.number({}) },
  { date: new Date("2022-03-06T02:09:35.077Z"), value: faker.datatype.number({}) },
  { date: new Date("2022-04-05T02:09:35.077Z"), value: faker.datatype.number({}) },
  { date: new Date("2022-05-06T02:09:35.077Z"), value: faker.datatype.number({}) },
  { date: new Date("2023-02-07T01:09:35.077Z"), value: faker.datatype.number({}) },
  { date: new Date("2023-03-08T08:09:35.077Z"), value: faker.datatype.number({}) },
  { date: new Date("2023-04-07T01:09:35.077Z"), value: faker.datatype.number({}) },
  { date: new Date("2023-05-08T08:09:35.077Z"), value: faker.datatype.number({}) },
  { date: new Date("2024-02-07T01:09:35.077Z"), value: faker.datatype.number({}) },
  { date: new Date("2024-03-08T08:09:35.077Z"), value: faker.datatype.number({}) },
  { date: new Date("2024-04-09T02:09:35.077Z"), value: faker.datatype.number({}) },
  { date: new Date("2024-07-10T07:09:35.077Z"), value: faker.datatype.number({}) },
  { date: new Date("2025-02-11T02:09:35.077Z"), value: faker.datatype.number({}) },
  { date: new Date("2025-11-12T04:09:35.077Z"), value: faker.datatype.number({}) },
  { date: new Date("2026-12-13T02:09:35.077Z"), value: faker.datatype.number({}) },
];

const dji = [
  {
    Date: faker.date.recent(5),
    Open: faker.random.numeric(),
    High: faker.random.numeric(),
    Low: faker.random.numeric(),
    Close: faker.random.numeric(),
    Volume: faker.random.numeric(),
  },
  {
    Date: faker.date.recent(5),
    Open: faker.random.numeric(),
    High: faker.random.numeric(),
    Low: faker.random.numeric(),
    Close: faker.random.numeric(),
    Volume: faker.random.numeric(),
  },
  {
    Date: faker.date.recent(5),
    Open: faker.random.numeric(),
    High: faker.random.numeric(),
    Low: faker.random.numeric(),
    Close: faker.random.numeric(),
    Volume: faker.random.numeric(),
  },
  {
    Date: faker.date.recent(5),
    Open: faker.random.numeric(),
    High: faker.random.numeric(),
    Low: faker.random.numeric(),
    Close: faker.random.numeric(),
    Volume: faker.random.numeric(),
  },
  {
    Date: faker.date.recent(5),
    Open: faker.random.numeric(),
    High: faker.random.numeric(),
    Low: faker.random.numeric(),
    Close: faker.random.numeric(),
    Volume: faker.random.numeric(),
  },
  {
    Date: faker.date.recent(5),
    Open: faker.random.numeric(),
    High: faker.random.numeric(),
    Low: faker.random.numeric(),
    Close: faker.random.numeric(),
    Volume: faker.random.numeric(),
  },
  {
    Date: faker.date.recent(5),
    Open: faker.random.numeric(),
    High: faker.random.numeric(),
    Low: faker.random.numeric(),
    Close: faker.random.numeric(),
    Volume: faker.random.numeric(),
  },
];

const line = [
  { date: new Date("2022-02-05T02:09:35.077Z"), close: faker.datatype.number({ max: 100 }) },
  { date: new Date("2022-02-06T02:09:35.077Z"), close: faker.datatype.number({ max: 100 }) },
  { date: new Date("2022-02-07T01:09:35.077Z"), close: faker.datatype.number({ max: 100 }) },
  { date: new Date("2022-02-08T08:09:35.077Z"), close: faker.datatype.number({ max: 100 }) },
  { date: new Date("2022-02-09T02:09:35.077Z"), close: faker.datatype.number({ max: 100 }) },
  { date: new Date("2022-02-10T07:09:35.077Z"), close: faker.datatype.number({ max: 100 }) },
  { date: new Date("2022-02-11T02:09:35.077Z"), close: faker.datatype.number({ max: 100 }) },
  { date: new Date("2022-02-12T04:09:35.077Z"), close: faker.datatype.number({ max: 100 }) },
  { date: new Date("2022-02-13T02:09:35.077Z"), close: faker.datatype.number({ max: 100 }) },
];

const areadiff = [
  {
    date: new Date("2022-02-13T02:09:35.077Z"),
    object1: faker.datatype.number({ max: 100, precision: 0.01 }),
    object2: faker.datatype.number({ max: 100, precision: 0.01 }),
  },
  {
    date: new Date("2022-03-14T02:09:35.077Z"),
    object1: faker.datatype.number({ max: 100, precision: 0.01 }),
    object2: faker.datatype.number({ max: 100, precision: 0.01 }),
  },
  {
    date: new Date("2022-04-15T02:09:35.077Z"),
    object1: faker.datatype.number({ max: 100, precision: 0.01 }),
    object2: faker.datatype.number({ max: 100, precision: 0.01 }),
  },
  {
    date: new Date("2022-05-16T02:09:35.077Z"),
    object1: faker.datatype.number({ max: 100, precision: 0.01 }),
    object2: faker.datatype.number({ max: 100, precision: 0.01 }),
  },
  {
    date: new Date("2022-06-17T02:09:35.077Z"),
    object1: faker.datatype.number({ max: 100, precision: 0.01 }),
    object2: faker.datatype.number({ max: 100, precision: 0.01 }),
  },
  {
    date: new Date("2022-07-18T02:09:35.077Z"),
    object1: faker.datatype.number({ max: 100, precision: 0.01 }),
    object2: faker.datatype.number({ max: 100, precision: 0.01 }),
  },
  {
    date: new Date("2022-08-19T02:09:35.077Z"),
    object1: faker.datatype.number({ max: 100, precision: 0.01 }),
    object2: faker.datatype.number({ max: 100, precision: 0.01 }),
  },
  {
    date: new Date("2022-09-20T02:09:35.077Z"),
    object1: faker.datatype.number({ max: 100, precision: 0.01 }),
    object2: faker.datatype.number({ max: 100, precision: 0.01 }),
  },
  {
    date: new Date("2022-10-18T02:09:35.077Z"),
    object1: faker.datatype.number({ max: 100, precision: 0.01 }),
    object2: faker.datatype.number({ max: 100, precision: 0.01 }),
  },
  {
    date: new Date("2022-11-19T02:09:35.077Z"),
    object1: faker.datatype.number({ max: 100, precision: 0.01 }),
    object2: faker.datatype.number({ max: 100, precision: 0.01 }),
  },
  {
    date: new Date("2022-12-20T02:09:35.077Z"),
    object1: faker.datatype.number({ max: 100, precision: 0.01 }),
    object2: faker.datatype.number({ max: 100, precision: 0.01 }),
  },
  {
    date: new Date("2023-02-21T02:09:35.077Z"),
    object1: faker.datatype.number({ max: 100, precision: 0.01 }),
    object2: faker.datatype.number({ max: 100, precision: 0.01 }),
  },
  {
    date: new Date("2023-04-22T02:09:35.077Z"),
    object1: faker.datatype.number({ max: 100, precision: 0.01 }),
    object2: faker.datatype.number({ max: 100, precision: 0.01 }),
  },
  {
    date: new Date("2023-05-23T02:09:35.077Z"),
    object1: faker.datatype.number({ max: 100, precision: 0.01 }),
    object2: faker.datatype.number({ max: 100, precision: 0.01 }),
  },
];

const stream = [
  {
    date: new Date("2022-02-28T02:09:35.077Z"),
    industry: "Education",
    unemployed: faker.datatype.number({ max: 1000 }),
  },
  {
    date: new Date("2022-03-01T02:09:35.077Z"),
    industry: "Education",
    unemployed: faker.datatype.number({ max: 1000 }),
  },
  {
    date: new Date("2022-04-02T02:09:35.077Z"),
    industry: "Education",
    unemployed: faker.datatype.number({ max: 1000 }),
  },
  {
    date: new Date("2022-05-03T02:09:35.077Z"),
    industry: "Education",
    unemployed: faker.datatype.number({ max: 1000 }),
  },
  {
    date: new Date("2022-06-04T02:09:35.077Z"),
    industry: "Education",
    unemployed: faker.datatype.number({ max: 1000 }),
  },
  {
    date: new Date("2022-02-28T02:09:35.077Z"),
    industry: "Automotive",
    unemployed: faker.datatype.number({ max: 1000 }),
  },
  {
    date: new Date("2022-03-01T02:09:35.077Z"),
    industry: "Automotive",
    unemployed: faker.datatype.number({ max: 1000 }),
  },
  {
    date: new Date("2022-04-02T02:09:35.077Z"),
    industry: "Automotive",
    unemployed: faker.datatype.number({ max: 1000 }),
  },
  {
    date: new Date("2022-05-03T02:09:35.077Z"),
    industry: "Automotive",
    unemployed: faker.datatype.number({ max: 1000 }),
  },
  {
    date: new Date("2022-06-04T02:09:35.077Z"),
    industry: "Automotive",
    unemployed: faker.datatype.number({ max: 1000 }),
  },
  {
    date: new Date("2022-02-28T02:09:35.077Z"),
    industry: "Service",
    unemployed: faker.datatype.number({ max: 1000 }),
  },
  {
    date: new Date("2022-03-01T02:09:35.077Z"),
    industry: "Service",
    unemployed: faker.datatype.number({ max: 1000 }),
  },
  {
    date: new Date("2022-04-02T02:09:35.077Z"),
    industry: "Service",
    unemployed: faker.datatype.number({ max: 1000 }),
  },
  {
    date: new Date("2022-05-03T02:09:35.077Z"),
    industry: "Service",
    unemployed: faker.datatype.number({ max: 1000 }),
  },
  {
    date: new Date("2022-06-04T02:09:35.077Z"),
    industry: "Service",
    unemployed: faker.datatype.number({ max: 1000 }),
  },
];

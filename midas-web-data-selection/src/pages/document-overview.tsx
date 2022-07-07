import Head from "next/head";
import { OverView } from "../components/overview";
import { DashboardLayout } from "../components/dashboard-layout";

import { Button, Card, CardActions, CardContent, Divider, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import { DirectedGraph } from "../components/dashboard/directed-graph";
import SampleSelect from "../components/sample-select";
import { StreamGraph } from "../components/dashboard/stream-graph";
import { Box } from "@mui/system";
import useWindowSize from "../utils/useWindowSize";
const DocumentOverview = () => {
  const [windowWidth,windowHeight] = useWindowSize()
  return(
  <div style={{ height: "100%", backgroundColor: "#212124" }}>
     <Head>
      <title>Midas Document Overview</title>
    </Head>
    <Typography variant="h3"
     color="goldenrod" 
     align="center" 
     sx={{ mb: 2, mt: 2 }}>
      Document Overview
    </Typography> 
    <Box display="flex" 
    sx={{ my: 1 }}>
      <SampleSelect page="document" />
      <Button variant="outlined"
       color="warning"
        sx={{ px: 4, ml: 1, mr: 1 }}>
        Update
      </Button>
      <Button variant="outlined"
       color="warning"
        sx={{ px: 4, mr: 1 }}>
        Compare
      </Button>
    </Box>
    <Divider />
    <Box sx={{display:'flex' , flexDirection:windowWidth > 850 ? 'row' : 'column'}} >
    <Card sx={{ backgroundColor: "#181818", width: "100%", mx:.5  , my:2 }}>
        <Typography variant="h6"
         color="goldenrod" 
         align="center"
          sx={{ mb: 2, mt: 2 }}>
            Overview
        </Typography>
        {/* <Divider /> */}
        <CardContent>
  <DirectedGraph data={graph}></DirectedGraph>
        </CardContent>
      </Card>
    <Card sx={{ backgroundColor: "#181818", width: "100%", mx:.5  , my:2 }}>
        <Typography variant="h6"
         color="goldenrod" 
         align="center"
          sx={{ mb: 2, mt: 2 }}>
          Comparisons
        </Typography>
        {/* <Divider /> */}
        <CardContent>
        <StreamGraph data={stream}></StreamGraph>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "flex-end" , mx:3,  mt:-3 , mb:1}}>
            <Button variant="outlined" 
            color="primary"
            sx={{ fontSize: 15 }}>
              custom
            </Button></CardActions>
      </Card>
    </Box>
  </div>
);
}

DocumentOverview.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default DocumentOverview;

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

const graph = {
  nodes: [
    { id: "publications" },
    { id: "financial times" },
    { id: "SCMP" },
    { id: "Wealthy Chinese feast on HK luxury goods" },
    { id: "Expedia stops American Airlines ticket sales" },
    { id: "Tablets set to steal the show at CES" },
    { id: "Luxury goods stores flock to Manchester" },
    { id: "Sara Lee offloads Kiwi polish unit for €245m" },
    { id: "Asia: the rise of the middle class" },
    { id: "Fashion's Hot Prospect for 2011" },
    { id: "China travel group pulls out of Aim" },
  ],
  links: [
    { source: "SCMP", target: "China travel group pulls out of Aim", type: "toArticle" },
    { source: "SCMP", target: "Fashion's Hot Prospect for 2011", type: "toArticle" },
    { source: "SCMP", target: "Asia: the rise of the middle class", type: "toArticle" },
    { source: "SCMP", target: "Sara Lee offloads Kiwi polish unit for €245m", type: "toArticle" },
    { source: "SCMP", target: "Luxury goods stores flock to Manchester", type: "toArticle" },
    { source: "SCMP", target: "Tablets set to steal the show at CES", type: "toArticle" },
    {
      source: "financial times",
      target: "Expedia stops American Airlines ticket sales",
      type: "toArticle",
    },
    {
      source: "financial times",
      target: "Wealthy Chinese feast on HK luxury goods",
      type: "toArticle",
    },
    { source: "publications", target: "SCMP", type: "toPub" },
    { source: "publications", target: "financial times", type: "toPub" },
  ],
};

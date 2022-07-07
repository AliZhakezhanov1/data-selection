import Head from "next/head";
import { DashboardLayout } from "../components/dashboard-layout";
import { Card, Typography } from "@mui/material";

const Selection = () => (
  <div style={{ backgroundColor: "#212124" , height:'100%' }}>
    <Head>
      <title>Midas Data Selection</title>
    </Head>
        
    <Typography variant="h3" 
    color="goldenrod" 
    align="center" 
    sx={{ mb: 2, mt: 2 }}>
      Data Selection
    </Typography>




  </div>
);

Selection.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Selection

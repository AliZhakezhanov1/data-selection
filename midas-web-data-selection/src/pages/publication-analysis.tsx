import Head from "next/head";
import { DashboardLayout } from "../components/dashboard-layout";
import { Card, Typography } from "@mui/material";
const PublicationAnalysis = () => (
  <div style={{ backgroundColor: "#212124" , height:'100%' }}>
    <Head>
      <title>Midas Publication Analysis</title>
    </Head>
    <Typography variant="h3" 
    color="goldenrod" 
    align="center" 
    sx={{ mb: 2, mt: 2 }}>
      Publication Analysis
    </Typography>



  </div>
);

PublicationAnalysis.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default PublicationAnalysis

import Head from "next/head";
import { DashboardLayout } from "../components/dashboard-layout";
import { Box, Button, Card, CardActions, CardContent, Divider, Typography } from "@mui/material";
import SampleSelect from "../components/sample-select";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import { Pie } from "../components/dashboard/pie-chart";
const DocumentAnalysis = () => {
  const [readMore, setReadMore] = useState<boolean>(false);
  return (
    <div style={{ backgroundColor: "#212124", height: "100%" }}>
      <Head>
        <title>Midas Document Analysis</title>
      </Head>

      <Typography variant="h4" color="goldenrod" align="center" sx={{ my: 2 }}>
        Document Analysis
      </Typography>
      <Box display="flex" sx={{ my: 1 }}>
        <SampleSelect page="document" />
        <Button variant="outlined" color="warning" sx={{ px: 4, mx: 1 }}>
          Update
        </Button>
      </Box>
      <Divider />

      <Box sx={{ flexDirection: "row", mt: 2 }} display="flex">
        <Card sx={{ backgroundColor: "#181818", width: "100%", mx: 1 }}>
          <Typography
            variant="h6"
            fontWeight={300}
            color="goldenrod"
            align="center"
            sx={{ mb: 2, mt: 2 }}
          >
            Vibe
          </Typography>
          <Divider />
          <CardContent>
            <Typography variant="h4" fontWeight={300} color="white" align="center">
              sad
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ backgroundColor: "#181818", width: "100%", mx: 1 }}>
          <Typography
            variant="h6"
            fontWeight={300}
            color="goldenrod"
            align="center"
            sx={{ mb: 2, mt: 2 }}
          >
            Score
          </Typography>
          <Divider />
          <CardContent>
            <Typography variant="h4" fontWeight={300} color="white" align="center">
              {faker.datatype.number({ max: 100 })}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ backgroundColor: "#181818", width: "100%", mx: 1 }}>
          <Typography
            variant="h6"
            fontWeight={300}
            color="goldenrod"
            align="center"
            sx={{ mb: 2, mt: 2 }}
          >
            Title
          </Typography>
          <Divider />
          <CardContent>
            <Typography variant="h6" fontWeight={300} color="white" align="center">
              Tablets set to steal the show at CES
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ backgroundColor: "#181818", width: "100%", mx: 1 }}>
          <Typography
            variant="h6"
            fontWeight={300}
            color="goldenrod"
            align="center"
            sx={{ mb: 2, mt: 2 }}
          >
            Topics
          </Typography>
          <Divider />
          <CardContent>
            <Typography variant="h6" fontWeight={300} color="white" align="center">
              <p>luxury</p>
              <p>travel</p>
              entertainment
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ flexDirection: "row", mt: 2 }} display="flex">
        <Card sx={{ backgroundColor: "#181818", width: "100%", mx: 1 }}>
          <Typography
            variant="h6"
            fontWeight={300}
            color="goldenrod"
            align="center"
            sx={{ mb: 2, mt: 2 }}
          >
            Date
          </Typography>
          <Divider />
          <CardContent>
            <Typography variant="h4" fontWeight={300} color="primary" align="center">
              1/3/2011
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ backgroundColor: "#181818", width: "100%", mx: 1 }}>
          <Typography
            variant="h6"
            fontWeight={300}
            color="goldenrod"
            align="center"
            sx={{ mb: 2, mt: 2 }}
          >
            Publication
          </Typography>
          <Divider />
          <CardContent>
            <Typography variant="h5" fontWeight={300} color="white" align="center">
              Financial Times
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ backgroundColor: "#181818", width: "100%", mx: 1 }}>
          <Typography
            variant="h6"
            fontWeight={300}
            color="goldenrod"
            align="center"
            sx={{ mb: 2, mt: 2 }}
          >
            URL
          </Typography>
          <Divider />
          <CardContent>
            <Typography variant="h6" fontWeight={200} align="center">
              <a style={{}} href="https://www.ft.com/content/3af841ce-175f-11e0-badd-00144feabdc0">
                https://www.ft.com/content/3af841ce-175f-11e0-badd-00144feabdc0
              </a>
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ backgroundColor: "#181818", width: "100%", mx: 1 }}>
          <Typography
            variant="h6"
            fontWeight={300}
            color="goldenrod"
            align="center"
            sx={{ mb: 2, mt: 2 }}
          >
            Entites
          </Typography>
          <Divider />
          <CardContent>
            <Typography variant="h4" fontWeight={300} color="white" align="center">
              {faker.datatype.number({ max: 50 })}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box>
        <Typography variant="h5" fontWeight={300} color="goldenrod" align="center" sx={{ m: 2 }}>
          Document Body
        </Typography>
        <Card sx={{ backgroundColor: "#181818", mx: 2 }}>
          <CardContent>
            <Typography color="white" align="center" fontSize={12}>
              As a dealer in Hong Kong for Lamborghini and an array of luxury yacht manufacturers,
              Leo Wong is in the right place at the right time. In 2010 an influx of wealthy buyers
              from mainland China pushed up sales in Hong Kong, where conspicuous consumption has
              long been a spectator sport, of everything from luxury cars and expensive apartments
              to fine art and fine wine. Mr Wongâ€™s twin dealerships in Hong Kong and the southern
              Chinese city of Guangzhou last year sold 65 Lamborghinis priced between HK$3m
              (US$385,000) and HK$12m. This year will be even better, he predicts.
            </Typography>
            {readMore && (
              <Typography color="white" align="center" fontSize={12}>
                The impact on the fine wine market in the city has been even more dramatic.
                Sothebyâ€™s Hong Kong wine sales totalled US$52.5m last year, up from US$14.3m in
                2009 and accounting for 59 per cent of the wine sold by the auction house worldwide,
                surpassing its sales in New York and London put together. Andrew Lloyd Webber, the
                British composer and theatre director, will be selling part of his collection of
                Bordeaux and Burgundy wines, valued at between US$2.8m and US$4.1m through the
                auction house in Hong Kong on January 22. The flood of money from across the border
                is creating problems for Hong Kong, where the economy grew 6.8 per cent in the third
                quarter. Donna Kwok, an economist with HSBC, predicts that asset prices will
                continue to be â€œdoused in gasolineâ€. A third of buyers of luxury flats in the
                city in 2010 were wealthy mainland Chinese, many of whom left their flats
                unoccupied, contributing to a rental spiral at the top of the market. The Hong Kong
                government faces a quandary: property prices have risen about 50 per cent across the
                board since the end of 2008, pricing middle-class first-time buyers out of the
                market. The government began taking steps in October to cool the market, announcing
                that property purchases would no longer be taken into account in determining
                eligibility for permanent residency. The following month the government dramatically
                raised the stamp duty on short-term sales of properties held for less than 12
                months. Academics in Hong Kong and mainland China say they are surprised by the
                volume of money crossing the border into Hong Kong, given that the mainland has
                capital controls. â€œThere are huge amounts of money flowing into Hong Kong from
                China but itâ€™s not legal,â€ says Chen Guanghan, a professor of economics at
                Zhongshan University in Guangzhou. Individuals in China are not allowed to transfer
                more than US$50,000 annually out of the country, which suggests that mainland buyers
                of expensive apartments in Hong Kong are using offshore accounts to finance their
                purchases and alternative routes such as channelling money through units of mainland
                companies with operations in Hong Kong. It is not just big-spenders: there have been
                reports of a tour bus of mainland Chinese tourists parking by a major bank in
                downtown Hong Kong while the travellers deposited their money there. A senior
                private banker likens the transferring of money from the mainland to Hong Kong to
                the hawala trade in Dubai, where money bypasses the conventional banking system
                using trusted intermediaries. Hong Kongâ€™s underground financial market is bigger
                today than that of Dubaiâ€™s, says Thomas Chan, head of the China Business Centre at
                Hong Kong Polytechnic University. â€œIt is capital flight but it can go back in
                again,â€ says Professor Chan. â€œMainland Chinese are using [Hong Kongâ€™s
                capitalist system] for investment and diversification. Hong Kong is a Casablanca:
                all kinds of people from different countries are dealing with each other informally
                here.â€ The cityâ€™s residents have increased their holding of renminbi deposits
                more than 200 per cent in the past year from a low base but their mainland
                cousinsâ€™ appetite for assets in Hong Kongâ€™s free economy continues unabated. An
                art industry insider estimates that a good portion of high-priced art and ceramics
                bought in the city by mainland Chinese â€“ contributing to record sales for auction
                houses in 2010 â€“ sits in empty flats.
              </Typography>
            )}
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="outlined" color="warning" onClick={() => setReadMore(!readMore)}>
              {readMore ? "Read Less" : "Read More"}
            </Button>
          </CardActions>
        </Card>
      </Box>

      <Box sx={{ flexDirection: "row", mt: 2 }} display="flex">
        <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2 }}>
          <Typography variant="h6" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
            Document Emotions
          </Typography>
          <Divider></Divider>
          <CardContent>
            <Pie data={emotions}></Pie>
          </CardContent>
        </Card>
        <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2, mr: 2 }}>
          <Typography variant="h6" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
            Document Opinion
          </Typography>
          <Divider></Divider>
          <CardContent>
            <Typography color="white" align="center">
              <p style={{ marginTop: 8, fontSize: 15 }}>Leo Wong is in the right place </p>
              <p style={{ marginTop: 8, fontSize: 15 }}>65 Lamborghinis priced between HK $ 3m </p>
              <p style={{ marginTop: 8, fontSize: 15 }}>
                Sotheby s Hong Kong wine sales totalled US $ 52.5m last year{" "}
              </p>
              <p style={{ marginTop: 8, fontSize: 15 }}>will be selling part of his collection </p>
              <p style={{ marginTop: 8, fontSize: 15 }}>predicts that asset prices</p>
              <p style={{ marginTop: 8, fontSize: 15 }}>says Chen Guanghan</p>
              <p style={{ marginTop: 8, fontSize: 15 }}> says Thomas Chan , says Thomas Chan </p>
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ flexDirection: "row", mt: 2 }} display="flex">
        <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2 }}>
          <Typography variant="h6" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
            Document Entites
          </Typography>
          <Divider></Divider>
          <CardContent>
            <Typography color="white" align="center">
              <p>Lamborghini</p>
              <p>Sotheby</p>
              <p>Bordeaux</p>
              <p>HSBC</p>
              <p>Zhongshan University</p>
              <p>China Business Centre </p>
              <p>Hong Kong Polytechnic University</p>
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ backgroundColor: "#181818", width: "100%", ml: 2, mr: 2 }}>
          <Typography variant="h6" color="goldenrod" align="center" sx={{ mb: 2, mt: 2 }}>
            Document Aspects
          </Typography>
          <Divider></Divider>
          <CardContent>
            <Typography color="white" align="center">
              <p>stockmarkets</p>
              <p>stock</p>
              <p>general economy</p>
              <p>corporate</p>
              <p>markets</p>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};
DocumentAnalysis.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default DocumentAnalysis;

const emotions = [
  { name: "happy", value: faker.datatype.number({ max: 1, precision: 0.001 }) },
  { name: "sad", value: faker.datatype.number({ max: 1, precision: 0.001 }) },
  { name: "anger", value: faker.datatype.number({ max: 1, precision: 0.001 }) },
  { name: "surprise", value: faker.datatype.number({ max: 1, precision: 0.001 }) },
  { name: "disgust", value: faker.datatype.number({ max: 1, precision: 0.001 }) },
  { name: "anticipation", value: faker.datatype.number({ max: 1, precision: 0.001 }) },
];

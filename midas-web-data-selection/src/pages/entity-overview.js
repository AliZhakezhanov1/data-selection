import Head from "next/head";
import { OverView } from "../components/overview"
import { DashboardLayout } from "../components/dashboard-layout";
import { faker } from "@faker-js/faker";

const EntityOverview = () => (
  <>
    <Head>
      <title>Midas Entity Overview</title>
    </Head>
    <OverView data={dummy} />
  </>
);

EntityOverview.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default EntityOverview;



const dummy = {
  name: "midasLtd",
  children: [
    {
      name: "Analytics",
      children: [
        { name: faker.company.companyName(), value: faker.random.numeric() },
        { name: faker.company.companyName(), value: faker.random.numeric() },
      ],
    },
    {
      name: "Entertaiment",
      children: [
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
      ],
    },
    {
      name: "Financial",
      children: [
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
      ],
    },
    {
      name: "Catering",
      children: [
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
      ],
    },
    {
      name: "Automotive",
      children: [
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
      ],
    },
    {
      name: "Education",
      children: [
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
      ],
    },
    {
      name: "Banks",
      children: [
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
      ],
    },
    {
      name: "Basic Material",
      children: [
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
      ],
    },
    {
      name: "Chemicals",
      children: [
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
      ],
    },
    {
      name: "Capital Goods",
      children: [
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
      ],
    },
    {
      name: "Consumer Durable",
      children: [
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
      ],
    },
    {
      name: "CommercialProfessionalServices",
      children: [
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
        {
          name: faker.company.companyName(),
          children: [
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
            { name: faker.company.companyName(), value: faker.random.numeric() },
          ],
        },
      ],
    },
  ],
};

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";
// import OpenInNewIcon from "@mui/icons-material/OpenInNew";
// import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import { Cog as CogIcon } from "../icons/cog";
import { Lock as LockIcon } from "../icons/lock";
import { Selector as SelectorIcon } from "../icons/selector";
import { ShoppingBag as ShoppingBagIcon } from "../icons/shopping-bag";
import { User as UserIcon } from "../icons/user";
import { UserAdd as UserAddIcon } from "../icons/user-add";
import { Users as UsersIcon } from "../icons/users";
// import { XCircle as XCircleIcon } from "../icons/x-circle";
// import { Logo } from "./logo";
import { NavItem } from "./nav-item";

// import TabList from '@mui/lab/TabList';
import { TabContext, TabList } from "@mui/lab";
const items = [
  {
    href: "/dummy",
    // icon: <ChartBarIcon fontSize="small" />,
    title: "Graph Bank",
  },
  {
    href: "/",
    // icon: <ChartBarIcon fontSize="small" />,
    title: "Data Selection",
  },
  {
    href: "/document-overview",
    // icon: <ChartBarIcon fontSize="small" />,
    title: "Document Overview",
  },
  {
    href: "/document-comparison",
    // icon: <ChartBarIcon fontSize="small" />,
    title: "Document Comparison",
  },
  {
    href: "/document-analysis",
    // icon: <ChartBarIcon fontSize="small" />,
    title: "Document Analysis",
  },
  {
    href: "/sentence-analysis",
    // icon: <ChartBarIcon fontSize="small" />,
    title: "Sentence Analysis",
  },
  {
    href: "/entity-overview",
    // icon: <ChartBarIcon fontSize="small" />,
    title: "Entity Overview",
  },
  {
    href: "/entity-comparison",
    // icon: <ChartBarIcon fontSize="small" />,
    title: "Entity Comparison",
  },
  {
    href: "/entity-analysis",
    // icon: <ChartBarIcon fontSize="small" />,
    title: "Entity Analysis",
  },
  {
    href: "/publication-comparison",
    // icon: <ChartBarIcon fontSize="small" />,
    title: "Publication Comparison",
  },
  {
    href: "/publication-analysis",
    // icon: <ChartBarIcon fontSize="small" />,
    title: "Publication Analysis",
  },
  {
    href: "/tables",
    // icon: <ChartBarIcon fontSize="small" />,
    title: "Tables",
  },
  {
    href: "/exports",
    // icon: <ChartBarIcon fontSize="small" />,
    title: "Export Files",
  },
  {
    href: "/customers",
    icon: <UsersIcon fontSize="small" />,
    title: "Customers",
  },
  {
    href: "/products",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Products",
  },
  {
    href: "/account",
    icon: <UserIcon fontSize="small" />,
    title: "Account",
  },
  {
    href: "/settings",
    icon: <CogIcon fontSize="small" />,
    title: "Settings",
  },
  {
    href: "/login",
    icon: <LockIcon fontSize="small" />,
    title: "Login",
  },
  {
    href: "/register",
    icon: <UserAddIcon fontSize="small" />,
    title: "Register",
  },
  // {
  //   href: "/404",
  //   icon: <XCircleIcon fontSize="small" />,
  //   title: "Error",
  // },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const [tier, setTier] = useState("free");
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "#121212",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink href="/" passHref>
              <a>
                <img
                  src="/static/images/midas_dark.jpg"
                  alt="Midas Analytics"
                  style={{ width: "100%", height: 42, objectFit: "cover" }}
                />
              </a>
            </NextLink>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "#b8860b",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                px: 3,
                py: "12px",
                borderRadius: 1.5,
              }}
            >
              <div>
                <Typography color="inherit" variant="subtitle1" fontFamily="monospace">
                  Goldman Sachs
                </Typography>
                <Typography color="neutral.700" variant="body2" fontWeight="600">
                  Tire: : {tier}
                </Typography>
              </div>
              <SelectorIcon
                sx={{
                  color: "neutral.500",
                  width: 14,
                  height: 14,
                }}
              />
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ height: "100%", backgroundColor: "#121212" }}>
          {items.map((item) => (
            <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
          ))}
        </Box>
        {/* <Box
          sx={{
            px: 2,
            py: 3,
          }}
        >
        </Box> */}
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

import PropTypes from "prop-types";
import styled from "@emotion/styled";
import {
  Typography,
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Button,
  Grid,
  Toolbar,
  Tooltip,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../styles/navbar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { Bell as BellIcon } from "../icons/bell";
import { UserCircle as UserCircleIcon } from "../icons/user-circle";
import { Users as UsersIcon } from "../icons/users";
// import theme from '../theme/index'
const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  // backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
          backgroundColor: '#3A3B3C',
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>

          <Tooltip title="Search">
            <IconButton sx={{ ml: 1, color: "white" }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          {/* <Box sx={{flexGrow:1}}>
            <Link href="" className={styles.a} underline="none" sx={{ml:2 }} color="inherent" >
              Industries
            </Link>
            <Link href="" className={styles.a} underline="none" sx={{ml:2 }} color="inherent">
              Companies
            </Link>
            <Link href="" className={styles.a} underline="none" sx={{ml:2 }} color="inherent">
              Contents
            </Link>
            <Link href="" className={styles.a} underline="none" sx={{ml:2 }} color="inherent">
              Report
            </Link>
          </Box> */}

          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1, color: "white" }}>
              <UsersIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1, color: "white" }}>
              <Badge badgeContent={4} color="primary" variant="dot">
                <BellIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1,
            }}
            src="/static/images/avatars/avatar_1.png"
          >
            <UserCircleIcon fontSize="small" />
          </Avatar>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

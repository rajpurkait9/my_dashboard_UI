import { colors } from "@mui/material";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import BarChartIcon from "@mui/icons-material/BarChart";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import MapIcon from "@mui/icons-material/Map";

const MySidebar = () => {
  return (
    <>
      <Sidebar
        style={{
          height: "90vh",
          position: "fixed",
          width: "14vw",
          backgroundColor: colors.blue[900],
          zIndex: 1,
          top: 70,
          left: 10,
          borderRadius: 20,
        }}
      >
        <Menu
          style={{
            color: colors.grey[900],
            marginTop: 20,
          }}
        >
          <MenuItem
            icon={
              <SpaceDashboardIcon
                sx={{
                  color: colors.blue[500],
                }}
              />
            }
          >
            Dashboard
          </MenuItem>
          <SubMenu
            icon={
              <BarChartIcon
                sx={{
                  color: colors.blue[500],
                }}
              />
            }
            label="Charts"
          >
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <SubMenu
            icon={
              <MapIcon
                sx={{
                  color: colors.blue[500],
                }}
              />
            }
            label="Maps"
          >
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </>
  );
};

export default MySidebar;

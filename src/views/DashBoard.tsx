import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Box, Paper } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import { useState } from "react";
import Map from "./Map";
const MENU_MAP = 0;
const DashBoard = () => {
  const [menu, setMenu] = useState(MENU_MAP);
  const getContents = () => {
    let content = <></>;
    switch (menu) {
      case MENU_MAP:
        content = <Map />;
        break;
      default:
        break;
    }
    return content;
  };

  return (
    <>
      <Box sx={{ justifyContent: "center", display: "flex", flex: 1, p: 3 }}>
        <CssBaseline />
        {getContents()}
        <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={menu}
            onChange={(event, newValue) => {
              setMenu(newValue);
            }}
          >
            <BottomNavigationAction label="MAP" icon={<MapIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
};

export default DashBoard;

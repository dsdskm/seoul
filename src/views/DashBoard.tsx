import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Box, Paper } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useEffect, useState } from "react";
import MapView from "./MapView";
import PlaceListView from "./PlaceListView";
import { getPlaceListFromFile } from "api/firebaseApi";
import { useDispatch } from "react-redux";
import { setPlaceList } from "state/states";
const MENU_MAP = 0;
const MENU_LIST = 1;
const DashBoard = () => {
  console.log(`DahsBoard`);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadList = async () => {
      const placeList = await getPlaceListFromFile();
      if (placeList) {
        dispatch(setPlaceList(placeList));
      }
    };

    loadList();
  }, [dispatch]);

  const [menu, setMenu] = useState(MENU_MAP);
  const getContents = () => {
    let content = <></>;
    switch (menu) {
      case MENU_MAP:
        content = <MapView />;
        break;
      case MENU_LIST:
        content = <PlaceListView />;
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
            <BottomNavigationAction label="LIST" icon={<FormatListBulletedIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
};

export default DashBoard;

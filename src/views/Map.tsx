import { Box, Button, listItemAvatarClasses, Typography } from "@mui/material";
import { requestGeocodeApi, requestSeoulApi } from "api";
import { PlaceData } from "common/types";
import { useState } from "react";

const Map = () => {
  const [list, setList] = useState<PlaceData[]>([]);
  const onGetClick = async () => {
    const res = await requestSeoulApi();
    console.log(`res`, res);
    setList(res);
  };
  const onRequestClick = async () => {
    if (list) {
      const newList: PlaceData[] = [];
      list.forEach(async (item) => {
        const { latitude, longitude } = await requestGeocodeApi(item.addr);
        item.latitude = latitude;
        item.longitude = longitude;
        newList.push(item);
      });
      setList(newList);
    }
  };
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Button onClick={onGetClick}>get</Button>
        <Button onClick={onRequestClick}>request</Button>
        <Box
          sx={{
            width: "100vw",
          }}
        >
          {list.map((item) => {
            return (
              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                <Typography>{item.company_name}</Typography>
                <Typography>{item.addr}</Typography>
                <Typography>{item.latitude}</Typography>
                <Typography>{item.longitude}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Map;

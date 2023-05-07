import { Box, Button, Typography } from "@mui/material";
import { requestGeocodeApi, requestSeoulApi } from "api";
import { addPlace, getPlaceList, update } from "api/firebaseApi";
import { PlaceData } from "common/types";
import { useState } from "react";

const Map = () => {
  const [list, setList] = useState<PlaceData[]>([]);
  const [dbList, setDbList] = useState<PlaceData[]>([]);
  const onGetClick = async () => {
    const res = await requestSeoulApi();
    setList(res);
    console.log(`res ${res.length}`);
    alert("get completed");
  };
  const onRequestClick = async () => {
    console.log(`onRequestClick`);
    if (list) {
      const newList: PlaceData[] = [];
      for (let index = 0; index < list.length; index += 1) {
        const item = list[index];
        const { latitude, longitude } = await requestGeocodeApi(item.addr, index);
        item.latitude = latitude;
        item.longitude = longitude;
        newList.push(item);
      }
      setList(newList);
      alert("request completed");
    }
  };

  const onClearClick = () => {
    setList([]);
  };

  const onAddClick = async () => {
    console.log(`onAddClick`);
    if (list) {
      await addPlace(list);
      alert("add completed");
    }
  };

  const onGetDbList = async () => {
    const _list = await getPlaceList();
    console.log(`_list ${_list.length}`);
    const tmpList: PlaceData[] = [];
    _list.forEach((item) => {
      if (item.office_tel === null) {
        tmpList.push(item);
      }
    });
    setList(tmpList);

    console.log(`tmpList ${tmpList.length}`);
    alert("get db list completed")
  };

  const onUpdateClick = async () => {
    console.log(`onUpdateClick`);
    if (list) {
      await update(list);
      alert("update completed");
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Button onClick={onGetClick}>get</Button>
        <Button onClick={onRequestClick}>request</Button>
        <Button onClick={onAddClick}>add</Button>
        <Button onClick={onClearClick}>clear</Button>
        <Button onClick={onGetDbList}>get db list</Button>
        <Button onClick={onUpdateClick}>update list</Button>
        <Box
          sx={{
            width: "100vw",
          }}
        >
          {list.map((item, index) => {
            return (
              <Box
                sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", m: 10 }}
              >
                <Typography>{index + 1}</Typography>
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

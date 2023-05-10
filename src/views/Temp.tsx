import { Box, Button, Typography } from "@mui/material";
import { requestGeocodeApi, requestSeoulApi } from "api/_api";
import { addPlace, getPlaceList, update } from "api/_firebaseApi";
import { PlaceData } from "common/types";
import { useState } from "react";

const Temp = () => {
  const [list, setList] = useState<PlaceData[]>([]);
  const onGetDbList = async () => {
    console.log(`onGetDbList`);
    const _list = await getPlaceList();
    console.log(`_list ${_list.length}`);
    const tmpList: PlaceData[] = [];
    _list.forEach((item) => {
      tmpList.push(item);
    });
    setList(tmpList);

    console.log(`tmpList ${tmpList.length}`);
    alert("onGetDbList completed");
  };

  const onUpdateClick = async () => {
    console.log(`onUpdateClick`);
    if (list) {
      await update(list);
      alert("onUpdateClick completed");
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Button onClick={onGetDbList}>get db list</Button>
        <Button onClick={onUpdateClick}>update list(show:true)</Button>
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

export default Temp;

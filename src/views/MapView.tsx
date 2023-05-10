import { Box } from "@mui/material";
import { PlaceData } from "common/types";
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from "react-naver-maps";
import { useSelector } from "react-redux";
import { PlaceListState } from "state/stateAction";

const MapView = () => {
  const placeListState = useSelector((state: PlaceListState) => state);
  const placeList = placeListState.placeListReducer.data;
  const navermaps = useNavermaps();
  return (
    <>
      <MapDiv style={{ width: "90vw", height: "90vh" }}>
        <NaverMap
          defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
          defaultZoom={15}
          zoomControl
          zoomControlOptions={{ position: navermaps.Position.TOP_RIGHT }}
        >
          {/* {placeList &&
            placeList.map((place: PlaceData) => {
              if (place.latitude && place.longitude) {
                const longitude = Number(place.latitude);
                const latitude = Number(place.longitude);
                if (latitude > 0 && longitude > 0) {
                  return <Marker defaultPosition={new navermaps.LatLng(latitude, longitude)} />;
                }
              }
            })} */}
        </NaverMap>
      </MapDiv>
    </>
  );
};

export default MapView;

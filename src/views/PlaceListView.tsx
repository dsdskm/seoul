import { useSelector } from "react-redux";
import { PlaceListState } from "state/stateAction";
import PlaceListTableView from "./PlaceListTableView";

const PlaceListView = () => {
  const placeListState = useSelector((state: PlaceListState) => state);
  const placeList = placeListState.placeListReducer.data;
  return <>{placeList && placeList.length > 0 && <PlaceListTableView list={placeList} />}</>;
};

export default PlaceListView;

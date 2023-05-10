import { PlaceData } from "common/types";

export const SET_PLACE_LIST = "SET_PLACE_LIST";

export interface PlaceListState {
  [x: string]: any;
  data: PlaceData[] | null;
}

export interface SetPlaceListAction {
  type: typeof SET_PLACE_LIST;
  data: PlaceData[];
}

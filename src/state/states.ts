import { PlaceData } from "common/types";
import { PlaceListState, SetPlaceListAction, SET_PLACE_LIST } from "./stateAction";

export const placeListState: PlaceListState = {
  data: null,
};

export const setPlaceList = (data: PlaceData[]): SetPlaceListAction => {
  return {
    type: SET_PLACE_LIST,
    data: data,
  };
};

export const placeListReducer = (state = placeListState, action: any): PlaceListState => {
  switch (action.type) {
    case SET_PLACE_LIST:
      return { ...state, data: action.data };
    default:
      return state;
  }
};

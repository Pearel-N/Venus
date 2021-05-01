import Place from "../models/place";
import { ADD_PLACE, SET_PLACES } from "./places-actions";

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return {
        places: action.places.map(
          (pl) =>
            new Place(
              pl.id.toString(),
              pl.title,
              pl.imageUri,
              pl.address,
              pl.lat,
              pl.lng
            )
        ),
      };
    case ADD_PLACE:
      const { id, title, image, address, coords } = action.placeData;
      const newPlace = new Place(
        id.toString(),
        title,
        image,
        address,
        coords.lat,
        coords.lng
      );
      return {
        places: state.places.concat(newPlace),
      };
    default:
      return state;
  }
  return state;
};

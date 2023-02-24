import { DELETE_FAVORITE, ADD_FAVORITE, FILTER,ORDER } from "../action/actionTypes";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAVORITE:
      console.log("payload",payload)
      return {
        ...state,
        allCharacters:[...state.allCharacters, payload],
        myFavorites: [...state.allCharacters,payload],
      };
    case DELETE_FAVORITE:
      const filtered = state.myFavorites.filter((fav) => fav.id !== payload);
      return {
        ...state,
        allCharacters:filtered,
        myFavorites: filtered
      };
    case FILTER:
      const filterCopy = [...state.allCharacters];
      const filterGender = filterCopy.filter((char) => char.gender === payload);
      return {
        ...state,
        myFavorites: filterGender,
      };
      case ORDER:
        const orderCopy = [...state.allCharacters];
        console.log(state.allCharacters)

        const order = orderCopy.sort((a,b) => {
            if(a.id > b.id){
                return payload === "Ascendente" ? 1 : -1
            }
            if(a.id < b.id){
                return payload === "Ascendente" ? -1 : 1
            }
        });
        return {
            ...state,
            myFavorites: order,
        };
        case "GET_FAVORITE":
/*           console.log("reducer ",state.myFavorites)
          console.log("reducer all",state.allCharacters) */
          return{
            ...state,
            myFavorites:payload
          };
    default:
      return state;
  }
}

export default rootReducer;

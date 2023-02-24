import { DELETE_FAVORITE, ADD_FAVORITE, FILTER,ORDER } from "./actionTypes";
import axios from 'axios'

//back Express// edit async
export function addFavorite(fav){
  console.log("pasamos por action creator antes del return")
    return async function (dispatch){
      try {
        console.log("pasamos por action creator antes de la reques")
        let chart=await axios.post('http://localhost:3001/rickandmorty/fav', fav);
        console.log(chart.data)
        console.log("pasamos por action creator despues de la reques")
           dispatch({
                    type: ADD_FAVORITE,
                    payload: chart.data
                });
      } catch (error) {
        console.log("error")
      }};
}

//from
// export function addFavorite(fav){
//     return {
//         type: ADD_FAVORITE,
//         payload: fav
//     }
// }

//back express
export const   deleteFavorite= (id) => {
    return async function (dispatch) {
      try {
        const chartDelete=await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
        console.log(chartDelete.data)
            dispatch({
              type: DELETE_FAVORITE,
              payload: id,
            });
      } catch (error) {
        console.log("error")
      }
    };
  };

//front
// export function deleteFavorite(id){
//     return {
//         type: DELETE_FAVORITE,
//         payload: id
//     }
// }

export function filterCards(status){
    return{
        type:FILTER,
        payload:status
    }
}

export function orderCards(id){
    return {
        type:ORDER,
        payload:id
    }
}

export function getFavorites(){
      return async function (dispatch){
          try {
              const character=await axios.get(`http://localhost:3001/rickandmorty/fav`)
              return dispatch({
                  type: "GET_FAVORITE",
                  payload: character.data
  
              })
          } catch (error) {
              console.log(error);
          }
      }
  }
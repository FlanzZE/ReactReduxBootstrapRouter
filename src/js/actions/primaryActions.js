// Perform actions here

export function doSomething() {
  return function(dispatch) {
    const num = Math.floor(Math.random() * 100);
    dispatch({
      type: "DO_SOMETHING",
      payload: { data: { idUser: `Number = ${num}` } }
    });
  };
}
export function setName(newName) {
  return function(dispatch) {
    dispatch({ type: "SET_NAME", payload: newName });
  };
}
export function setOwnInfo(ownInfo, id) {
  return function(dispatch) {
    dispatch({ type: "SET_OWN_INFO", payload: { id: id, owner: ownInfo } });
  };
}
export function setPlaceInfo(placeInfo, id) {
  return function(dispatch) {
    dispatch({ type: "SET_PLACE_INFO", payload: { id: id, place: placeInfo } });
  };
}
export function setPriceInfo(priceInfo, id) {
  return function(dispatch) {
    dispatch({ type: "SET_PRICE", payload: { id: id, price: priceInfo } });
  };
}

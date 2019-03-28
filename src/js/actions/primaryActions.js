// Perform actions here

export function doSomething() {
  return function(dispatch) {
    const num = Math.floor(Math.random()*100);
    dispatch({type:"DO_SOMETHING", payload: {"data":{idUser: `Number = ${num}`}} })
  }
}
export function setName(newName) {
  return function(dispatch) {
   
    dispatch({type:"SET_NAME", payload:newName })
  }
}


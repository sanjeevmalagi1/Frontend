export function addItem(payload){
  return (dispatch) => {
    dispatch({ type: 'ADD_ITEM',payload })
  }
}

export function removeItem(payload){
  return (dispatch) => {
    dispatch({ type: 'REMOVE_ITEM',payload })
  }
}

export function clearCart(){
  return (dispatch) => {
    dispatch({ type: 'CLEAR_ALL' })
  }
}
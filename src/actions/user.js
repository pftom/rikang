
const clearItem = function clearItem(ITEM_IDENTITY) {
  return {
    type: ITEM_IDENTITY,
  };
};

const setItem = (ITEM_IDENTITY, payload) => dispatch => {
  dispatch({
    type: ITEM_IDENTITY,
    payload,
  });
}

export {
  clearItem,
  setItem
};
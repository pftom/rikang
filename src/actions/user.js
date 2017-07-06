
const clearItem = function clearItem(ITEM_IDENTITY) {
  return {
    type: ITEM_IDENTITY,
  };
};

const setItem = function setItem(ITEM_IDENTITY, payload) {
  return {
    type: ITEM_IDENTITY,
    payload,
  };
}

export {
  clearItem,
  setItem
};
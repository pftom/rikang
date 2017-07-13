//up refresh, use new data replace all old data
const refresh = (oldData, newData) => {
  return newData;
}

//down refresh, old data concat new data
const combine = (oldData, newData) => {
  const results = oldData.get('results');

  return newData.update('results', list => results.concat(list));
}

export {
  combine,
  refresh,
}
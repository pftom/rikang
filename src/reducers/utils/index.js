//up refresh, use new data replace all old data
const refreshIt = (oldData, newData) => {

  return newData.toJS();
}

//down refresh, old data concat new data
const combine = (oldData, newData) => {
  const results = oldData.get('results');

  const res = newData.update('results', list => results.concat(list));
  return res.toJS();
}

export {
  combine,
  refreshIt,
}
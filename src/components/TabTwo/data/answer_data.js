const handleAnswers = (data) => {
  let dataSource= [];

  //handle immutable data for optimization 
  data.map(item => {
    let data = {
      owner: {

      }
    };
    item.mapEntries(([key, value]) => {
      if (key === 'owner') {
        value.mapEntries(([key, value]) => {
          data['owner'][key] = value;
        })
      } else {
        data[key] = value;
      }
   })
   data['key'] = item.get('id');
   dataSource.push(data);
  })
  return dataSource;
};




export {
  handleAnswers,
}
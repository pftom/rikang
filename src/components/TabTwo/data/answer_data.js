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
  console.log('dataSource', dataSource);
  return dataSource;
};


const getLatestId = (list) => {
  let id = 1;
  list.map(item => {
    if (item.get('id') > id) {
      id = item.get('id');
    }
  })

  return id;
}

const getBeRepliedName = (list, reply_to) => {
  let name = null;

  list.map(item => {
    if (item.get('id') === reply_to) {
      name = item.get('replier_name');
    }
  })

  return name;
}



export {
  handleAnswers,
  getLatestId,
  getBeRepliedName,
}
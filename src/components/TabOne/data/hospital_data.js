//handle immutable data to plain object
const handleHospitalDoctors = (data) => {
  let dataSource = [];
 
  data.map((item) => {
    dataSource.push({
      key: item.get('id'),
      img: item.get('photo'),
      title: item.get('title'),
      time: handleTime(item.get('created')),
    });
  })

  return dataSource;
}


export {
  handleHospitalDoctors,
}
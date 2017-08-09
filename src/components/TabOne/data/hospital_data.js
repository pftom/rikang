//handle immutable data to plain object
const handleHospitalDoctors = (data) => {
  let dataSource = [];
 
  data.map((item) => {
    item = item.toJS();
    dataSource.push({
      key: item.id,
      ...item,
    });
  })

  return dataSource;
}


export {
  handleHospitalDoctors,
}
const handleAnswers = (data) => {
  let dataSource= [];

  data.map((value, key) => {
    console.log('value', value);
    console.log('key', key);
  })

  return data;
};

export {
  handleAnswers,
}
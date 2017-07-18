const handleQuestions = (data) => {
  let dataSource = [];

  data.map((item) => {

    dataSource.push({
      key: item.get('id'),
      answer_num: item.get('answer_num'),
      title: item.get('title'),
      id: item.get('id'),
      solved: item.get('solved'),
      stars: item.get('stars'),
    });
  });

  return dataSource;
}


export {
  handleQuestions,
}
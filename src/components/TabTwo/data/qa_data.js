const handleQuestion = (item) => ({
  key: item.get('id'),
  answer_num: item.get('answer_num'),
  title: item.get('title'),
  id: item.get('id'),
  solved: item.get('solved'),
  stars: item.get('stars'),
  department: item.get('department'),
  body: item.get('body'),
});


const handleQuestions = (data) => {
  let dataSource = [];

  data.map((item) => {
    dataSource.push({
      item: handleQuestion(item),
      question: item,
      key: item.get('id'),
    });
  });

  return dataSource;
}





export {
  handleQuestions,
  handleQuestion,
}
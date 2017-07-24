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

const sortMap = {
  '默认排序': 'default',
  '关注数最多': 'stars',
  '回答数最多': 'solved',
};

const handleQuestions = (data, dep, sort) => {
  let dataSource = [];

  let sortedData = [];
  let kind = sortMap[sort];
  switch(kind) {
    case 'default':
      sortedData = data;
      break;
    default:
      sortedData = data.sort((item1, item2) => {
        if (item1.get(kind) < item2.get(kind)) { return -1; }
        if (item1.get(kind) > item2.get(kind)) { return 1; }
        if (item1.get(kind) === item2.get(kind)) { return 0; }
      });
  }

  sortedData.map((item) => {
    if (dep && item.get('department') !== dep) { return; }
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

//tab bar item
const ITEMS = [
      '我的问题',
      '我的咨询',
      '我的收藏',
];


const handleQuestions = (data, cut) => {
  let dataSource = [];

  data.map((item) => {
    item = item.toJS();
    const { id } = item;

    dataSource.push({
      ...item,
      key: id,
    });
  });

  if (dataSource.length > 2 && cut) {
    return dataSource.slice(0, 2);
  }

  return dataSource;
};

export {
  ITEMS,
  handleQuestions,
}
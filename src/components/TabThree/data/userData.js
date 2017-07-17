
//tab bar item
const ITEMS = [
      '我的问题',
      '我的咨询',
      '我的收藏',
];

const jumpToScreenLists = [
  'FavProblemList',
  'PatientServiceList',
  'DoctorList',
];

const MAP_PAID_STATUS ={
   'U':   'unpaid',
   'P':     'paid',
   'W': 'underway',
   'R':   'refund',
   'F': 'finished',
};


const handleUserData = (data, kind, status) => {
  let dataSource = [];

  data.map((item) => {
    if (kind === 'questions') {
      if (status === 'solved' && !item.get('solved')) {
        return;
      }
      if (status === 'unsolved' && item.get('solved')) {
        return;
      }
    }

    if (kind === 'services') {
      if (status === 'underway' && item.get('status') !== 'underway') {
        return;
      }

      if (status === 'paid' && item.get('status') !== 'paid') {
        return;
      }

      if (status === 'finished' && item.get('status') !== 'finished') {
        return;
      }
    }

      item = item.toJS();
      const { id } = item;

      dataSource.push({
          ...item,
          key: id,
        });
    });
  return {
    data: dataSource,
    count: dataSource.length,
  };
};

export {
  ITEMS,
  handleUserData,
  jumpToScreenLists,
}
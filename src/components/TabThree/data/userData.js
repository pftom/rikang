
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


const handleUserData = (data, kind, status, doctors) => {
  //the last params doctors is for get the service item doctor name
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
      console.log('status', MAP_PAID_STATUS[item.get('status')], item.get('status'))
      if (status === 'underway' && MAP_PAID_STATUS[item.get('status')] !== 'underway') {
        return;
      }

      if (status === 'paid' && MAP_PAID_STATUS[item.get('status')] !== 'paid') {
        return;
      }

      if (status === 'finished' && MAP_PAID_STATUS[item.get('status')] !== 'finished') {
        return;
      }
    }



      item = item.toJS();
      const { id } = item;

      //nameItem and avatarItem is a trick 
      // which i use for kind === services to get the doctor name and avatar
      // because, the back-end not supply, and I am so lazy. = =!
      let nameItem = {};
      let avatarItem = {};

      if (kind === 'services') {
        doctors.map(item => {
          if (item.get('id') === id) {
            nameItem = {
              name: item.get('name'),
            };
            
            avatarItem = {
              avatar: item.get('avatar'),
            };
          }
        })
      }

      dataSource.push({
          ...item,
          key: id,
          ...nameItem,
          ...avatarItem,
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
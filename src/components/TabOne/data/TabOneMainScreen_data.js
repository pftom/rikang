const headerTitleData = [
  {
    img: require('../img/question.png'),
    title: '我要提问',
  },
  {
    img: require('../img/nearbyDoctor.png'),
    title: '附近医生',
  },
  {
    img: require('../img/nearbyHospital.png'),
    title: '附近医院',
  },
];


const nearbyDoctor = [];
for (let i = 0; i < 10; i++) {
  const nearbyDoctorItem = {
    avatar: require('../img/testAvatar.png'),
    name: '谢尔盖',
    categoryImg: require('../img/eyeDep.png'),
    categoryTitle: '眼科',
    doctorAge: 20,
    key: i,
};
  nearbyDoctor.push(nearbyDoctorItem);
}



const healthPost = [];

for (let i = 0; i < 20; i++) {
  const healthPostItem = {
    img: require('../img/postImg.png'),
    title: '5个大招让你旅途中也能睡个好觉',
    time: '2017年5月24日',
    key: 10 + i,
};
  healthPost.push(healthPostItem);
}

export {
  headerTitleData,
  nearbyDoctor,
  healthPost,
}
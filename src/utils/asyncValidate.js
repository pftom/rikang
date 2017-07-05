const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = (values) => {
  return sleep(1000)
    .then(() => {
      if (!['13786684946', '13786684947', '13786684948'].includes(values.get('username'))) {
        throw { username: 'That username is taken' };
      }
    })
};

export default asyncValidate;
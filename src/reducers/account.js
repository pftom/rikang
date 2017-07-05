import Immutable from 'immutable';

const initialAccountValue = Immutable.fromJS({});

const account = (state = initialAccountValue, action) => {
  switch (action.type) {
    case 'LOAD':
      return state.merge(Immutable.fromJS(action.data));
    default:
      return state;
  }
};

export default account;
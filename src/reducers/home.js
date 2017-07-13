import Immutable from 'immutable';

//import action constants
import { 
  GET_DOCTORS,
  GET_DOCTORS_ERROR,
  GET_DOCTORS_SUCCESS, 

  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
} from '../constants/';

//import single action constants
import {
  GET_SINGLE_DOCTOR,
  GET_SINGLE_DOCTOR_SUCCESS,
  GET_SINGLE_DOCTOR_ERROR,

  GET_SINGLE_POST,
  GET_SINGLE_POST_SUCCESS,
  GET_SINGLE_POST_ERROR,
} from '../constants/';

//import handle func for computing data
import {
  combine,
  refreshIt,
} from './utils/'



//home reducers
const initialHomeValue = Immutable.Map({
  doctors: null,
  posts: null,
  doctor: null,
  post: null,
  isLoadingData: false,
  loadingError: false,
  loadingSuccess: false,
});

const home = (state = initialHomeValue, action) => {
  switch (action.type) {
    case GET_DOCTORS:
    case GET_POSTS:
    case GET_SINGLE_POST:
    case GET_SINGLE_DOCTOR:

      return state.merge({
        isLoadingData: true,
        loadingError: false,
        loadingSuccess: false,
      });
    
    case GET_DOCTORS_SUCCESS:

      const { doctors } = action;
      return state.merge({
        isLoadingData: false,
        loadingSuccess: true,
        doctors,
      });
    
    case GET_POSTS_SUCCESS:

    const { posts, refresh } = action.payload;
    let oldPosts = state.get('posts');

    if (posts) {
      posts = Immutable.Map(posts);
    }

    return state.merge({
      isLoadingData: false,
      loadingSuccess: true,
      posts: refresh ? refreshIt(oldPosts, posts) : combine(oldPosts, posts),
    });


    case GET_SINGLE_DOCTOR_SUCCESS:

        const { doctor } = action;
        return state.merge({
          isLoadingData: false,
          loadingSuccess: true,
          doctor
        });
      
      case GET_SINGLE_POST_SUCCESS:

      const { post } = action;
      return state.merge({
        isLoadingData: false,
        loadingSuccess: true,
        post,
      });
      

    case GET_DOCTORS_ERROR:
    case GET_POSTS_ERROR:
    case GET_SINGLE_DOCTOR_ERROR:
    case GET_SINGLE_POST_ERROR:

      return state.merge({
        isLoadingData: false,
        loadingError: true,
      });

    default:
      return state;
  }
};

export default home;
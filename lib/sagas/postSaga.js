Object.defineProperty(exports,"__esModule",{value:true});exports.watchGetPosts=exports.watchGetPost=undefined;var _reduxSaga=require('redux-saga');
var _effects=require('redux-saga/effects');


var _constants=require('../constants/');









var _request=require('../configs/request');var _request2=_interopRequireDefault(_request);

var _config=require('../configs/config');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _marked=[



getSinglePost,











getPosts,










watchGetPost,








watchGetPosts].map(regeneratorRuntime.mark);function getSinglePost(payload){var id,token,post;return regeneratorRuntime.wrap(function getSinglePost$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;id=payload.id,token=payload.token;_context.next=4;return(0,_effects.call)(_request2.default.get,_config.base+(0,_config.homeSingleApi)(id).singlePost,null,token);case 4:post=_context.sent;_context.next=7;return(0,_effects.put)({type:_constants.GET_SINGLE_POST_SUCCESS,post:post});case 7:_context.next=13;break;case 9:_context.prev=9;_context.t0=_context['catch'](0);_context.next=13;return(0,_effects.put)({type:_constants.GET_SINGLE_POST_ERROR});case 13:case'end':return _context.stop();}}},_marked[0],this,[[0,9]]);}function getPosts(payload){var token,posts;return regeneratorRuntime.wrap(function getPosts$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;token=payload.token;_context2.next=4;return(0,_effects.call)(_request2.default.get,_config.base+_config.homeApi.posts,null,token);case 4:posts=_context2.sent;_context2.next=7;return(0,_effects.put)({type:_constants.GET_POSTS_SUCCESS,posts:posts});case 7:_context2.next=13;break;case 9:_context2.prev=9;_context2.t0=_context2['catch'](0);_context2.next=13;return(0,_effects.put)({type:_constants.GET_POSTS_ERROR});case 13:case'end':return _context2.stop();}}},_marked[1],this,[[0,9]]);}function watchGetPost(){var _ref,payload;return regeneratorRuntime.wrap(function watchGetPost$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:if(!true){_context3.next=9;break;}_context3.next=3;return(0,_effects.take)(_constants.GET_SINGLE_POST);case 3:_ref=_context3.sent;payload=_ref.payload;_context3.next=7;return(0,_effects.call)(getSinglePost,payload);case 7:_context3.next=0;break;case 9:case'end':return _context3.stop();}}},_marked[2],this);}function watchGetPosts(){var _ref2,payload;return regeneratorRuntime.wrap(function watchGetPosts$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:if(!
true){_context4.next=9;break;}_context4.next=3;return(
(0,_effects.take)(_constants.GET_POSTS));case 3:_ref2=_context4.sent;payload=_ref2.payload;_context4.next=7;return(

(0,_effects.call)(getPosts,payload));case 7:_context4.next=0;break;case 9:case'end':return _context4.stop();}}},_marked[3],this);}exports.







watchGetPost=watchGetPost;exports.
watchGetPosts=watchGetPosts;
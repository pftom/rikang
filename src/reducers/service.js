import { List, Map } from 'immutable';

//import action constants
import { 
  CREATE_NEW_ORDER,
  CREATE_NEW_ORDER_SUCCESS,
  CREATE_NEW_ORDER_ERROR,

  PAY,
  PAY_ERROR,
  PAY_SUCCESS,

  CANCEL_ORDER,
  CANCEL_ORDER_SUCCESS,
  CANCEL_ORDER_ERROR,

  REFUND,
  REFUND_SUCCESS,
  REFUND_ERROR,

  FINISH_ORDER,
  FINISH_ORDER_SUCCESS,
  FINISH_ORDER_ERROR,


  CLEAR_SERVICE_STATE,

  GET_CLIENT_IP,
  GET_CLIENT_IP_SUCCESS,
  GET_CLIENT_IP_ERROR,

  ADD_COMMENT_FOR_ORDER,
  ADD_COMMENT_FOR_ORDER_ERROR,
  ADD_COMMENT_FOR_ORDER_SUCCESS,
  CLEAR_COMMENT_ORDER_STATE,

} from '../constants/';

const initialServiceValue = Map({
  newOrder: null,
  charge: null,
  refund: null,

  clientIp: null,
  isGetClientIp: false,
  getClientIpSuccess: false,
  getClientIpError: false,
  
  isCreateNewOrder: false,
  createNewOrderSuccess: false,
  createNewOrderError: false,

  isCancelOrder: false,
  cancelOrderSuccess: false,
  cancelOrderError: false,

  isPaying: false,
  paySuccess: false,
  payError: false,

  charge: List([]),

  isRefunding: false,
  refundSuccess: false,
  refundError: false,

  isFinishOrder: false,
  finishOrderSuccess: false,
  finishOrderError: false,

  isComment: false, 
  commentSuccess: false, 
  commentError: false,
});


const service = (state = initialServiceValue, action) => {
  switch(action.type) {
    case CREATE_NEW_ORDER:

      return state.merge({
        isCreateNewOrder: true,
        createNewOrderSuccess: false,
        createNewOrderError: false,
      });

    case CREATE_NEW_ORDER_SUCCESS:

      const { newOrder } = action;

      return state.merge({
        isCreateNewOrder: false,
        createNewOrderSuccess: true,
        newOrder,
      });

    case CREATE_NEW_ORDER_ERROR:

      return state.merge({
        isCreateNewOrder: false,
        createNewOrderError: true,
      });


    case CANCEL_ORDER:

      return state.merge({
        isCancelOrder: true,
        cancelOrderSuccess: false,
        cancelOrderError: false,
      });

    
    case CANCEL_ORDER_SUCCESS:

      return state.merge({
        isCancelOrder: false,
        createNewOrderSuccess: true,
      });


    case CANCEL_ORDER_ERROR:

      return state.merge({
        isCancelOrder: false,
        createNewOrderError: true,
      });


    case PAY:

      return state.merge({
        isPaying: true,
        paySuccess: false,
        payError: false,
      });

    case PAY_SUCCESS:

      const { charge } = action;

      return state.merge({
        isPaying: false,
        paySuccess: true,
        charge,
      });

    case PAY_ERROR:

      return state.merge({
        isPaying: false,
        payError: true,
      });

    case REFUND:

      return state.merge({
        isRefunding: true,
        refundSuccess: false,
        refundError: false,
      });

    case REFUND_SUCCESS:

      const { refund } = action;

      return state.merge({
        isRefunding: false,
        refundSuccess: true,
        refund,
      });

    case REFUND_ERROR:

      return state.merge({
        isRefunding: false,
        refundError: true,
      });

    case FINISH_ORDER:

      return state.merge({
        isFinishOrder: true,
        finishOrderSuccess: false,
        finishOrderError: false,
      });

    case FINISH_ORDER_SUCCESS:

      return state.merge({
        isFinishOrder: false,
        finishOrderSuccess: true,
      });

    case FINISH_ORDER_ERROR:

      return state.merge({
        isFinishOrder: false,
        finishOrderError: true,
      });

    case GET_CLIENT_IP:
    
      return state.merge({
        isGetClientIp: true,
        getClientIpSuccess: false,
        getClientIpError: false,
      });

    case GET_CLIENT_IP_SUCCESS:
      
      const { clientIp } = action;

      return state.merge({
        isGetClientIp: false,
        getClientIpSuccess: true,
        clientIp,
      });

    case GET_CLIENT_IP:
    
      return state.merge({
        isGetClientIp: false,
        getClientIpError: true,
      });


    case ADD_COMMENT_FOR_ORDER:

      return state.merge({
        isComment: true, 
        commentSuccess: false, 
        commentError: false,
      });

    case ADD_COMMENT_FOR_ORDER_SUCCESS:

      return state.merge({
        isComment: false, 
        commentSuccess: true, 
      });

    case ADD_COMMENT_FOR_ORDER_ERROR:

      return state.merge({
        isComment: false, 
        commentError: true,
      });

    case CLEAR_COMMENT_ORDER_STATE:
      
      return state.merge({
        isComment: false, 
        commentSuccess: false, 
        commentError: false,
      });

    case CLEAR_SERVICE_STATE:

      return state.merge({
        isCreateNewOrder: false,
        createNewOrderSuccess: false,
        createNewOrderError: false,

        isCancelOrder: false,
        cancelOrderSuccess: false,
        cancelOrderError: false,

        isPaying: false,
        paySuccess: false,
        payError: false,

        isRefunding: false,
        refundSuccess: false,
        refundError: false,

        isFinishOrder: false,
        finishOrderSuccess: false,
        finishOrderError: false,

        isGetClientIp: false,
        getClientIpSuccess: false,
        getClientIpError: false,
      })

    default: 
      return state;
    
  }
}

export default service;
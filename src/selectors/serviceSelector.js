import { createSelector } from 'reselect';

//import get token common select
import { getToken } from './commonSelector';

//all hospital selector
const getIsCreateNewOrder = (state) => state.getIn(['service', 'isCreateNewOrder']);
const getCreateNewOrderSuccess = (state) => state.getIn(['service', 'createNewOrderSuccess']);
const getCreateNewOrderError = (state) => state.getIn(['service', 'createNewOrderError']);

const getCreatedOrder = (state) => state.getIn(['service', 'newOrder']);
const getCharge = (state) => state.getIn(['service', 'charge']);

const getIsPaying = (state) => state.getIn(['service', 'isPaying']);
const getPaySuccess = (state) => state.getIn(['service', 'paySuccess']);
const getPayError = (state) => state.getIn(['service', 'payError']);

const getIsCancelOrder = (state) => state.getIn(['service', 'isCancelOrder']);
const getCancelOrderSuccess = (state) => state.getIn(['service', 'cancelOrderSuccess']);
const getCancelOrderError = (state) => state.getIn(['service', 'cancelOrderError']);

const getIsRefunding = (state) => state.getIn(['service', 'isRefunding']);
const getRefundSuccess = (state) => state.getIn(['service', 'refundSuccess']);
const getRefundError = (state) => state.getIn(['service', 'refundError']);

const getIsFinishOrder = (state) => state.getIn(['service', 'isFinishOrder']);
const getFinishOrderSuccess = (state) => state.getIn(['service', 'finishOrderSuccess']);
const getFinishOrderError = (state) => state.getIn(['service', 'finishOrderError']);

const getIsGetClientIp = (state) => state.getIn(['service', 'isGetClientIp']);
const getGetClientIpSuccess = (state) => state.getIn(['service', 'getClientIpSuccess']);
const getGetClientIpError = (state) => state.getIn(['service', 'getClientIpError']);
const getClientIp = (state) => state.getIn(['service', 'clientIp']);

export const getServiceSelector = createSelector(
  [ 
    getIsCreateNewOrder,
    getCreateNewOrderSuccess,
    getCreateNewOrderError,
    getCreatedOrder,
    getIsPaying,
    getPaySuccess,
    getPayError,
    getIsCancelOrder,
    getCancelOrderSuccess,
    getCancelOrderError,
    getIsRefunding,
    getRefundSuccess,
    getRefundError,
    getIsFinishOrder,
    getFinishOrderSuccess,
    getFinishOrderError,
    getCharge,
    getIsGetClientIp,
    getGetClientIpSuccess,
    getGetClientIpError,
    getClientIp,
   ],
  (
    isCreateNewOrder,
    createNewOrderSuccess,
    createNewOrderError,
    newOrder,
    isPaying,
    paySuccess,
    payError,
    isCancelOrder,
    cancelOrderSuccess,
    cancelOrderError,
    isRefunding,
    refundSuccess,
    refundError,
    isFinishOrder,
    finishOrderSuccess,
    finishOrderError,
    charge,
    isGetClientIp,
    getClientIpSuccess,
    getClientIpError,
    clientIp,
  ) => ({
    isCreateNewOrder,
    createNewOrderSuccess,
    createNewOrderError,
    newOrder,
    isPaying,
    paySuccess,
    payError,
    isCancelOrder,
    cancelOrderSuccess,
    cancelOrderError,
    isRefunding,
    refundSuccess,
    refundError,
    isFinishOrder,
    finishOrderSuccess,
    finishOrderError,
    charge,
    isGetClientIp,
    getClientIpSuccess,
    getClientIpError,
    clientIp,
  }),
);

const getIsComment = (state) => state.getIn(['service', 'isComment']);
const getCommentSuccess = (state) => state.getIn(['service', 'commentSuccess']);
const getCommentError = (state) => state.getIn(['service', 'commentError']);

export const getNewCommentSelector = createSelector(
  [ 
    getIsComment,
    getCommentSuccess,
    getCommentError,
  ],
  (
    isComment,
    commentSuccess,
    commentError,
  ) => ({
    isComment,
    commentSuccess,
    commentError,
  })
)
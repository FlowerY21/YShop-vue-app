import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_SHOP_GOODS,
  RECEIVE_SHOP_RATINDS,
  RECEIVE_SHOP_INFO
} from './mutation-types'

export default ({
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state,{userInfo}){
    state.userInfo = {}
  },
  [RECEIVE_SHOP_GOODS](state,{goods}){
    state.goods = goods
  },
  [RECEIVE_SHOP_RATINDS](state,{ratings}){
    state.ratings = ratings
  },
  [RECEIVE_SHOP_INFO](state,{info}){
    state.info = info
  },
})

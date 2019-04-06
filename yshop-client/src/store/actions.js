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
import {
  reqAddress,
  reqFoodCategorys,
  reqShopList,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from '../api'

export default ({
  // 异步获取地址
  async getAddress ({commit,state}){
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash);
    if(result.code == 0){
      const address = result.data;
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  // 异步获取食品分类列表
  async getFoodCategorys({commit}){
    const result = await reqFoodCategorys();
    if(result.code == 0){
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  // 异步获取商家列表
  async getShopList({commit,state}){
    const {longitude , latitude} = state
    const result = await reqShopList(longitude , latitude)
    if(result.code == 0){
      const shops = result.data;
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  // 同步记录用户信息
  recordUser({commit},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  // 异步获取用户信息
  async getUserInfo({commit}){
    const result = await reqUserInfo();
    if(result.code == 0){
      const userInfo = result.data;
      commit(RECEIVE_USER_INFO,{userInfo})
    }
  },

  // 退出登录
  async logout({commit}){
    const result = await reqLogout();
    if(result.code == 0){
      const userInfo = result.data;
      commit(RESET_USER_INFO,{userInfo})
    }
  },

  // 异步获取店铺商品信息
  async getShopGoods({commit}){
    const result = await reqShopGoods();
    if(result.code == 0){
      const goods = result.data;
      commit(RECEIVE_SHOP_GOODS,{goods})
    }
  },
  // 异步获取店铺评价信息
  async getShopRatinds({commit}){
    const result = await reqShopRatings();
    if(result.code == 0){
      const ratings = result.data;
      commit(RECEIVE_SHOP_RATINDS,{ratings})
    }
  },
  // 异步获取店铺信息
  async getShopInfo({commit}){
    const result = await reqShopInfo();
    if(result.code == 0){
      const info = result.data;
      commit(RECEIVE_SHOP_INFO,{info})
    }
  },
})



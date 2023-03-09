import {item} from '../actions/actions'

export type initialStateTypes = {
  isRegistered : boolean,
  cart : item[]
}

const initialState:initialStateTypes = {
  isRegistered : true,
  cart : []
}


export const regReducer = (state = initialState.isRegistered,action:any) => {
  switch(action.type){
    case "checkRegStatus":{
      return (!state)
    };

    default: return state
  }
}

export const cartReducer = (state = initialState.cart, action: any) => {
  switch (action.type) {
    case 'addToCart': return [...state,action.payload];

    case 'REMOVE_FROM_CART':  return state.filter((item) => item.id !== action.payload);
    default: return state;
  }
};
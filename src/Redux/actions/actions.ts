export type item = {
    id:number,
 title: string;
  description: string;
  price: string;
  image: string;
  rating:{
    rate:number
  };
}


export const regStatus = () => {
    return {
        type : "checkRegStatus"
    }
}

export const setCart = (items : item) => {
    return {
        type:"addToCart",
        payload : items
    }
}

export const removeItem = (id:number) => {
  return {
    type:"REMOVE_FROM_CART",
    payload:id
  }
}
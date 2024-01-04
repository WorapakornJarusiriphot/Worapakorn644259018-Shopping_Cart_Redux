import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./actionTypes";
import { initialState } from "./initialState";

const nextId = (items) => {
  return items.reduce((id, item) => Math.max(id, item.id), -1) + 1;
};

const findProductInCart = (items, action) => {
  return items.find((p) => p.productId === action.payload.id);
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = findProductInCart(state, action);
      if (product) {
        return state.map((p) => {
          if (p.productId === product.productId) {
            return {
              ...p,
              quantity: p.quantity + 1,
            };
          } else {
            return p;
          }
        });
      } else {
        return [
          ...state,
          {
            ...action.payload,
            id: nextId(state),
            quantity: 1,
            productId: action.payload.id,
          },
        ];
      }
    case REMOVE_FROM_CART:
      return state.filter((p) => p.id !== action.payload);
    case INCREASE_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        } else {
          return product;
        }
      });
    case DECREASE_QUANTITY:
    default:
      return state;
  }
};
//       return [
//         ...state,
//         {
//           id: nextId(state),
//           ...action.payload,
//           price: parseFloat(action.payload.price),
//           quantity: parseInt(action.payload.quantity),
//         },
//       ];
//     case ADD_QUANTITY:
//       return state.map((product) => {
//         if (product.id === action.payload.productId) {
//           return {
//             ...product,
//             quantity: product.quantity + action.payload.quantity,
//           };
//         } else {
//           return product;
//         }
//       });
//     case REMOVE_QUANTITY:
//       return state.map((product) => {
//         if (product.id === action.payload) {
//           return {
//             ...product,
//             quantity: product.quantity - 1,
//           };
//         } else {
//           return state;
//         }
//       });
//     default:
//       return state;
//   }
// };

export default cartReducer;

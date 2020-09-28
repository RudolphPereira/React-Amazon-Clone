export const initialState = {
  basket: [
    {
      id: "141516",
      title: "Apple iPhone 11 Pro Max (64GB) - Midnight Green",
      image: "https://m.media-amazon.com/images/I/61ers6OzvUL._AC_UY218_.jpg",
      price: 69.99,
      rating: 5,
    },
  ],
  user: null,
};
const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      // Logic for removing item to basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
};

export default reducer;

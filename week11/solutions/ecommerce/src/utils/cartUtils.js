export const addToCart = (cart, product, itemIndex) => {
  let newCart = [];
  // let cartItem = cart.find((item) => item.id == product.id);
  // if (cartItem) {
  //   newCart = cart.map((item) =>
  //     item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
  //   );
  // } else {
  //   newCart = [...cart, { ...cartItem, quantity: 1 }];
  // }
  // return newCart;
  if (itemIndex !== -1) {
    newCart = [...cart];
    newCart[itemIndex].quantity++;
  } else {
    newCart = [...cart, { ...product, quantity: 1 }];
  }
  localStorage.setItem('cart', JSON.stringify(newCart));
  return newCart;
};
export const removeFromCart = (cart, product, itemIndex) => {
  let newCart = [];
  // let cartItem = cart.find((item) => item.id == product.id);
  // if (cartItem) {
  //   newCart = cart.map((item) =>
  //     item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item,
  //   );
  // } else {
  //   newCart = [...cart, { ...cartItem, quantity: 1 }];
  // }
  // return newCart;
  newCart = [...cart];
  if (itemIndex !== -1) {
    if (newCart[itemIndex].quantity > 1) {
      newCart[itemIndex].quantity--;
    } else {
      newCart.splice(itemIndex, 1);
    }
    console.log(newCart);
  }
  localStorage.setItem('cart', JSON.stringify(newCart));
  return newCart;
};
export const resetCart = () => {
  localStorage.removeItem('cart');
  return [];
};

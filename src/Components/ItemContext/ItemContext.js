import { createContext, useState } from 'react';
import { useContext } from 'react';
export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [form, setform] = useState({});

  const setFormPrueba = () => setform([]);

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  const getQuantity = () => {
    let cant = 0
    cart.forEach((e) => cant += e.quantity)
    return cant
  };
  const getTotal = () => {
    let total = 0
    cart.forEach((e) => total += (e.quantity * e.price))
    return total
  };

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map(product => {
        return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
      }));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  }
  return (
    <CartContext.Provider
      value={{ clearCart, isInCart, removeProduct, addProduct, getQuantity, getTotal, cart, form, setFormPrueba }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider
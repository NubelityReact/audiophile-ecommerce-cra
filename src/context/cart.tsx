// 1. crear el contexto
// 2. provider
// 3. consumer

import React, { createContext, useContext, useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
}

interface cartItems {
  product: Product;
  amount: number;
}

interface cartState {
  items: cartItems[];
  vat: number;
  total: number;
  setItems: React.Dispatch<React.SetStateAction<cartItems[]>>;
}

const CartContext = createContext<cartState>({} as cartState);

interface ICartProvider {
  children: React.ReactNode;
}

export const CartProvider: React.FC<ICartProvider> = (props) => {
  const [items, setItems] = useState<cartItems[]>([]);
  const [total, setTotal] = useState(0);

  const vat = 50;

  useEffect(() => {
    const total = items.reduce((acc, item, index, arr) => {
      return acc + item.product.price * item.amount;
    }, 0);

    setTotal(total);
  }, [items]);

  return (
    <CartContext.Provider value={{ items, setItems, vat, total }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

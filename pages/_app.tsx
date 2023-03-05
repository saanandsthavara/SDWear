import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<any>({});
  const [subTotal, setSubTotal] = useState<number>(0);

  useEffect(() => {
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart') || '{}'));
      }
    } catch (error) {
      console.log('error', error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart: any) => {
    localStorage.setItem('cart', myCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const addToCart = (
    itemCode: any,
    quantity: any,
    price: any,
    productName: any,
    size: any,
    variant: any
  ) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].quantity = cart[itemCode].quantity + quantity;
    } else {
      newCart[itemCode] = { quantity: 1, price, productName, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const removeToCart = (
    itemCode: any,
    quantity: any,
    price: any,
    productName: any,
    size: any,
    variant: any
  ) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].quantity = cart[itemCode].quantity - quantity;
    }
    if (newCart[itemCode].quantity <= 0) {
      delete newCart[itemCode];
    }
  };

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

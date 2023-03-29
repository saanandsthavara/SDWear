/* eslint-disable jsx-a11y/alt-text */
import React, { useRef } from 'react';
import Link from 'next/link';
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { IoLogoOctocat } from 'react-icons/io';

interface Props {
  cart: any;
  addToCart: any;
  removeFromCart: any;
  clearCart: any;
  subTotal: any;
}

export const Navbar = ({
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}: Props) => {
  const toggleCart = () => {
    console.log('data', cart, addToCart, removeFromCart, clearCart, subTotal);

    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    } else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }
  };
  const ref = useRef<any>();

  // CLear all the data from the logs and also make sure that

  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center my-3 mb-2 '>
      <div className='logo mx-5'>
        <Link href={'/'}>
          <span className='flex justify-between gap-2 align-middle cursor-pointer'>
            <IoLogoOctocat />
            <span>SDWear</span>
          </span>
        </Link>
      </div>
      <div className='nav'>
        <ul className='flex items-center space-x-6 font-bold'>
          <Link href={'/tshirts'}>
            <a>
              <li>Tshirts</li>
            </a>
          </Link>
          <Link href={'/hoodies'}>
            <a>
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href={'/stickers'}>
            <a>
              <li>Stickers</li>
            </a>
          </Link>
          <Link href={'/mugs'}>
            <a>
              <li>Mugs</li>
            </a>
          </Link>
        </ul>
      </div>
      <div
        className='cart absolute right-0 mx-5 top-3 cursor-pointer'
        onClick={toggleCart}>
        <AiOutlineShoppingCart className='text-xl md:text-2xl' />
      </div>
      <div
        className='sideCart w-72 h-full absolute right-0 top-0 bg-pink-100 py-10 px-8  transform transition-transform translate-x-full '
        ref={ref}>
        <h2 className='font-bold text-center text-xl'>
          Shopping Cart
          <span
            className='absolute top-5 right-2 cursor-pointer text-xl'
            onClick={toggleCart}>
            <AiFillCloseCircle />
          </span>
        </h2>
        <ol className='list-decimal font-semibold'>
          <li>
            <div className='flex item my-5'>
              <div className='w-2/3 font-semibold text-sm'>
                T-Shirts Wear the code
              </div>
              <div className='w-1/3 flex items-center justify-center font-semibold space-x-2'>
                <AiOutlineMinusCircle className='cursor-pointer' />{' '}
                <span className='mx-2'>1</span>
                <AiOutlinePlusCircle className='cursor-pointer' />
              </div>
            </div>
          </li>
          <li>
            <div className='flex item my-5'>
              <div className='w-2/3 font-semibold text-sm'>
                T-Shirts Wear the code
              </div>
              <div className='w-1/3 flex items-center justify-center font-semibold space-x-2'>
                <AiOutlineMinusCircle className='cursor-pointer' />{' '}
                <span className='mx-2'>1</span>
                <AiOutlinePlusCircle className='cursor-pointer' />
              </div>
            </div>
          </li>
          <li>
            <div className='flex item my-5'>
              <div className='w-2/3 font-semibold text-sm'>
                T-Shirts Wear the code
              </div>
              <div className='w-1/3 flex items-center justify-center font-semibold space-x-2'>
                <AiOutlineMinusCircle className='cursor-pointer' />{' '}
                <span className='mx-2'>1</span>
                <AiOutlinePlusCircle className='cursor-pointer' />
              </div>
            </div>
          </li>
        </ol>
        <div className='flex'>
          <button className='flex mr-2 text-white bg-orange-400 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-sm'>
            <BsFillCartFill className='m-1' /> Checkout
          </button>
          <button
            className='flex mr-2 text-black border-0 py-2 px-8 focus:outline-none bg-gray-300 rounded text-sm'
            onClick={clearCart}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

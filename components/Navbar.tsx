/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoLogoOctocat } from 'react-icons/io';

export const Navbar = () => {
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
      <div className='cart absolute right-0 mx-5 top-3'>
        <AiOutlineShoppingCart className='text-xl md:text-2xl' />
      </div>
    </div>
  );
};

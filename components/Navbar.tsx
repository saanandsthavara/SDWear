/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoLogoOctocat } from 'react-icons/io';

export const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center'>
      <div className='logo mx-5'>
        <span className='flex justify-between gap-2 align-middle'>
          <IoLogoOctocat />
          <span>SDWear</span>
        </span>
      </div>
      <div className='nav'>
        <ul className='flex items-center space-x-2 font-bold'>
          <Link href={'/'}>
            <a>
              <li>Tshirts</li>
            </a>
          </Link>
          <Link href={'/'}>
            <a>
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href={'/'}>
            <a>
              <li>Stickers</li>
            </a>
          </Link>
          <Link href={'/'}>
            <a>
              <li>Mugs</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className='cart absolute right-0 mx-5 top-1'>
        <AiOutlineShoppingCart />
      </div>
    </div>
  );
};

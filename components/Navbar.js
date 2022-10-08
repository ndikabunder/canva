import React from 'react';

export default function Navbar() {
  return (
    <nav className='flex justify-between px-4 md:px-20 py-6 items-center bg-slate-100'>
      <div className='p-2 md:hidden bg-slate-200 flex justify-center rounded-lg'>
        <span className='material-symbols-outlined'>menu</span>
      </div>
      <div className='md:flex md:space-x-10 md:items-center'>
        <span className='font-bold text-lg'>Canva</span>
        <ul className='hidden md:flex space-x-10'>
          <li>Flash Sale</li>
          <li>For Students</li>
          <li>For Corporate</li>
        </ul>
      </div>
      <div className='flex items-center space-x-4'>
        <div className='hidden md:flex items-center justify-center bg-white p-3 rounded-full space-x-2'>
          <span class='material-symbols-outlined'>search</span>
          <input type='text' className='outline-0' />
        </div>
        <div className='py-3 px-7 bg-slate-200 flex justify-center rounded-full'>
          <button className='text-sm md:text-base font-medium'>
            Masuk / Daftar
          </button>
        </div>
      </div>
    </nav>
  );
}

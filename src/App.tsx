import React, { useState } from 'react';
import classNames from 'classnames';
import './App.css';

const menuItems = [
  {
    title: 'Rules',
    children: [
      {
        title: 'JailBreak',
        url: '/jbrules',
      }
    ]
  },
  {
    title: 'Links',
    children: [
      {
        title: 'Discord',
        url: 'https://discord.gg/jynFBnPpba',
      }
    ]
  },
  {
    title: 'Servers',
    children: [
      {
        title: 'JailBreak',
        url: 'steam://connect/jblock.africa:27015',
      }
    ]
  },
];

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <React.Fragment>
      <div
        className={classNames('z-[2] fixed bg-[#f39c12] w-screen transition-all duration-200', { 'h-[calc(100vh-200px)] border-b border-b-black': opened }, { 'h-[0px]': !opened })}
      >
        <div className={classNames('px-[65px] text-black h-full grid sm:flex justify-evenly items-center', { '!hidden': !opened })}>
          {menuItems.map((menu) => (
            <div key={menu.title}>
              <div className='font-bold text-[100px] tracking-[3px] mb-3'>{menu.title}</div>
              {menu.children.map((item) => (
                <div key={item.title} className='text-[40px] tracking-[2px] hover:underline'><a href={item.url}>{item.title}</a></div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div onClick={() => setOpened(!opened)} className='z-[3] fixed top-2 left-2 flex items-center space-x-2 select-none cursor-pointer'>
        <div
          className={classNames(`mt-2 tham tham-e-arrow-alt tham-w-8`, { 'tham-active': opened })}
        >
          <div className="tham-box">
            <div className={classNames("tham-inner", { 'bg-[#f39c12]': !opened }, { 'bg-black': opened })} />
          </div>
        </div>

        <div className={classNames('text-[2em] tracking-[2px]', { 'text-[#f39c12]': !opened }, { 'text-black': opened })}>
          MENU
        </div>
      </div>

      <div className='w-screen h-screen flex justify-center'>
        <div className='w-full'>
          <h1 style={{ textShadow: '3px 3px #000' }} className='text-center mt-[70px] text-[40px] sm:text-[5em] text-[#f39c12] '>Welcome to JBlock</h1>
          <div className='h-[calc(100vh-290px)] mt-[100px] w-full bg-[#f39c12]'>
            <div className='p-2 h-full flex justify-center items-center sm:items-start'>
              <img src="/images/art.png" className='shimmer sm:h-[calc(100vh-306px)] ' alt="" srcSet="/images/art.png" />
            </div>
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}

export default App

import React, { useState } from 'react'
import classNames from 'classnames'
import './App.css'

function App() {
  const [opened, setOpened] = useState(false);
  return (
    <React.Fragment>
      <div
        className={classNames('z-[2] fixed bg-[#f39c12] w-screen transition-all duration-200', { 'h-[calc(100vh-200px)] border-b border-b-black': opened }, { 'h-[0px]': !opened })}
      >
        <div className='px-[65px] text-black h-full flex justify-evenly items-center'>
          <div>
            <div className='font-bold text-[100px] title tracking-[3px] mb-3'>Rules</div>
            <div className='title text-[40px] tracking-[2px] hover:underline'><a href="#">JailBreak</a></div>
          </div>

          <div>
            <div className='font-bold text-[100px] title tracking-[3px] mb-3'>Links</div>
            <div className='title text-[40px] tracking-[2px] hover:underline'><a href="#">Discord</a></div>
          </div>
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

        <div className={classNames('title text-[2em] tracking-[2px]', { 'text-[#f39c12]': !opened }, { 'text-black': opened })}>
          MENU
        </div>
      </div>

      <div className='w-screen h-screen flex justify-center'>
        <div className='w-full'>
          <h1 style={{ textShadow: '3px 3px #000' }} className='title text-center mt-[70px] text-[40px] sm:text-[5em] text-[#f39c12] '>Welcome to JBlock</h1>
          <div className='h-[calc(100vh-290px)] mt-[100px] w-full bg-[#f39c12]'>
            <div className='p-2 h-full flex justify-center items-center sm:items-start'>
              <img src="/images/jblock.png" className='shimmer sm:h-[calc(100vh-306px)] ' alt="" srcSet="/images/jblock.png" />
            </div>
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}

export default App

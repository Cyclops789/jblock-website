import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import classNames from 'classnames';

const menuItems = [
    {
        title: 'Links',
        children: [
            {
                title: 'Home',
                url: '/',
            },
            {
                title: 'Discord',
                url: 'https://discord.gg/jynFBnPpba',
            }
        ]
    },
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
        title: 'Servers',
        children: [
            {
                title: 'JailBreak',
                url: 'steam://connect/jblock.africa:27015',
            }
        ]
    },
];

function Layout() {
    const [opened, setOpened] = useState(false);
    const location = useLocation();

    useEffect(() => setOpened(false), [location]);

    return (
        <React.Fragment>
            <div className={classNames('z-[2] top-0 fixed bg-primary w-screen transition-all duration-200', { 'h-[calc(100vh-200px)] border-b border-b-black': opened }, { 'h-[0px]': !opened })}>
                <div className={classNames('pt-3 px-[65px] text-black h-full grid sm:flex justify-evenly items-center', { '!hidden': !opened })}>
                    {menuItems.map((menu) => (
                        <div key={menu.title}>
                            <div className='font-bold text-[100px] tracking-[3px] mb-3'>{menu.title}</div>
                            {menu.children.map((item) => (
                                item.url.startsWith('/') ? (
                                    <Link className='text-[40px] tracking-[2px] hover:underline' key={item.title} to={item.url}>{item.title}</Link>
                                ) : (
                                    <div key={item.title} className='text-[40px] tracking-[2px] hover:underline'><a href={item.url}>{item.title}</a></div>
                                )
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div onClick={() => setOpened(!opened)} className='z-[3] fixed top-2 left-2 flex items-center space-x-2 select-none cursor-pointer'>
                <div className={classNames(`mt-2 tham tham-e-arrow-alt tham-w-8`, { 'tham-active': opened })}>
                    <div className="tham-box">
                        <div className={classNames("tham-inner", { 'bg-primary': !opened }, { 'bg-black': opened })} />
                    </div>
                </div>

                <div className={classNames('text-[2em] tracking-[2px]', { 'text-primary': !opened }, { 'text-black': opened })}>
                    MENU
                </div>
            </div>

            <Outlet />
        </React.Fragment>
    )
}

export default Layout;
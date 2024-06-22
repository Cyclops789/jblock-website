import React from 'react';

function Main() {
    return (
        <React.Fragment>
            <div className='w-screen h-screen flex justify-center'>
                <div className='w-full'>
                    <h1 style={{ textShadow: '3px 3px #000' }} className='text-center mt-[70px] text-[40px] sm:text-[5em] text-primary '>Welcome to JBlock</h1>
                    <div className='h-[calc(100vh-290px)] mt-[100px] w-full bg-primary'>
                        <div className='p-2 h-full flex justify-center items-center sm:items-start'>
                            <img src="/images/art.png" className='shimmer sm:h-[calc(100vh-306px)] ' alt="" srcSet="/images/art.png" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Main;
import React from 'react';
import Style from './style/spinner.module.css'

function spiner() {
    return (
    <div className='h-screen w-full bg-black flex justify-center items-center'>
        <div className={Style.loader}>
            <div className={Style.box1}></div>
            <div className={Style.box2}></div>
            <div className={Style.box3}></div>
        </div>
    </div>
  )
}

export default spiner
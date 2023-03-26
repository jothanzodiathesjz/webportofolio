import React from 'react'
import gambar from '../assets/pasfoto.jpg'
import Icon from './Icon'
import NavBar from './Nav';
import CardStyle from './style/card.module.css'


function Hero() {

    return (
        <>
            <section id='hero' className='relative bg-black' style={{ height: '100vh' }}>
                <h1 className='logo absolute right-10'>JozoPoex</h1>
                <div id='heroContent' className='h-full'>
                    <div className='floating-image'>
                        <div className={CardStyle.card}>
                            <div className={CardStyle.cardInfo}>

                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 h-max flex justify-center flex-col items-centers'>
                        <h1 className='text_shadows'>Hello, Iam Jothan Zodiathes</h1>
                        <h2 className='text-2xl text-[#BDF547]'>Web Developer</h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
import React from 'react'

const Nav = () => {
    return (
        <div className='bg-green-900 px-1 p-6 '>
            <div className='flex justify-between mx-6'>
                <div>
                    <a className='text-white text-lg' href="/">Anasayfa | </a>
                    <a className='text-white text-lg' href="/contact">İletişim </a>
                </div>
                <div>
                    <a className='text-white text-lg' href="/login">Giriş Yap</a>
                </div>
            </div>
        </div>
    )
}

export default Nav
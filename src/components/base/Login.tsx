import React from 'react'

const Login = () => {
    return (

        <div className='flex flex-col content-center w-full border-2 border-green-900 rounded-md p-8'>
            <div className='mb-3'>
                Hoş Geldiniz
            </div>

            <form action="" className='flex flex-col gap-5'>
                <div>
                    <label htmlFor="email"></label>
                    <input className='border-2 w-1/2 border-green-800 rounded-lg' type="email"
                        name='email' placeholder='Email' />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input className='border-2 w-1/2 border-green-800 rounded-lg' type="password" name='password' placeholder='Şifre' />
                </div>
                <button className='text-left border-2 border-green-900 hover:text-white hover:bg-green-900 w-fit p-1 rounded-2xl' type='submit'>Giriş Yap</button>
            </form>

        </div>
    )
}

export default Login
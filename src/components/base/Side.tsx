import React from 'react'

const Side = ({ src1, src2 }) => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='bg-green-900 text-white px-1' >
                Reklamlar
            </div>
            <div>
                <a href="https://www.bugudergisi.com/SonSayi.Aspx"><img src={src1} alt="BuguReklam" /></a>
            </div>
            <div>
                <a href="https://www.bugudergisi.com/SonSayi.Aspx"><img src={src2} alt="BuguReklam" /></a>
            </div>
        </div>
    )
}

export default Side
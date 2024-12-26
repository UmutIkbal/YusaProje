import React from 'react'

const Menu = () => {
    return (
        <div>
            <table className='w-full'>
                <tbody>
                    <tr className=''>
                        <th className='bg-green-900 text-white text-left italic p-2 text-sm'>Menü</th>
                    </tr>

                    <tr>
                        <td className='border-b-2 text-sm text-green-900 hover:bg-slate-200 hover:text-black'>
                            <a className='' href="/">Son Sayı</a>
                        </td>
                    </tr>

                    <tr>
                        <td className='border-b-2 text-sm text-green-900 hover:bg-slate-200 hover:text-black'>
                            <a href="/login"><strong>Üyelik</strong></a>
                        </td>
                    </tr>

                    <tr>
                        <td className='border-b-2 text-sm text-green-900 hover:bg-slate-200 hover:text-black'>
                            <a href="about"><del>Dergi Hakkında</del></a>
                        </td>
                    </tr>

                </tbody>
            </table>

        </div >
    )
}

export default Menu
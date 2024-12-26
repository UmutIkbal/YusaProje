import React from 'react'

const ContentCard = ({ title, author, type, publish, abstract }) => {
    return (
        <div className='flex flex-col gap-8'>
            <div className='bg-green-900 text-white p-1'>
                <h1><strong>{title}</strong></h1>
            </div>
            <div>
                <div>
                    <h2><strong>Yazar:</strong> {author}</h2>
                </div>
                <div>
                    <h2><strong>Tür:</strong> {type}</h2>
                </div>
                <div>
                    <h2><strong>Yayın:</strong> {publish} </h2>
                </div>
            </div>
            <div className='mt-4'>
                <span className='text-green-900 italic'><strong>Özet</strong></span>
                <p>{abstract}</p>
            </div>
        </div>
    )
}

export default ContentCard
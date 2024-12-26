import React from 'react'

const ArticleCard = ({ title, description, doi, link }) => {
    return (
        <div>
            <div className=''>
                <h1 className='border-b-2'>
                    <a href={link} className='text-green-700 text-md'>{title}</a>
                </h1>
            </div>
            <div>
                <p>
                    <span className='text-black text-md'>{description}</span>
                </p>
            </div>
            <div>
                <span className='text-gray-500 text-md'>Doi Number: {doi}</span>
            </div>
        </div>
    )
}

const Content = () => {
    return (
        <div className='-mt-1'>
            <div className='border-b-2 border-b-slate-400 p-1 flex flex-col gap-3'>
                <div className='bg-green-900 text-white px-1'>
                    Son Sayılar
                </div>
                <div className='flex flex-row gap-8'>
                    <div>
                        <img className='h-60 w-54' src="/cat.jpg" alt="" />
                    </div>
                    <div className='flex flex-col content-center gap-8 justify-center text-left'>
                        <div className='flex flex-col'>
                            <strong>Editör</strong>
                            Sabri Gül
                        </div>
                        <div className='flex flex-col'>
                            <strong>Yardımcı Editör</strong>
                            Reşit Küçük
                        </div>
                        <div className='flex flex-col'>
                            <strong>Ankara. 2024</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4 flex flex-col gap-3'>
                <ArticleCard title={"Sabri Gül , Hüseyin Ekici"} description={"İvesi koyunlarında farklı yaşta sütten kesimin kuzularda büyüme ve süt verimi üzerine etkisi"} doi={"http://dx.doi.org/10.46321/bugu.167"}
                    link={"/articles/1"} >

                </ArticleCard>
                <ArticleCard title={"Reşit Küçük , Nuran Tapkı"} description={"Hatay ilinde süt ve süt ürünleri üreten işletmelerin üretim ve pazarlama yapısı"} doi={"Doi Number :http://dx.doi.org/10.46321/bugu.1171"} link={"/articles/2"} >

                </ArticleCard>
                <ArticleCard title={"Görkem Yanık"} description={"Bombus terrestris arısında Deltamethrin’in olası olumsuz etkilerinin laboratuvar koşullarında belirlenmesi"} doi={"Doi Number :http://dx.doi.org/10.46321/bugu.1169"}
                    link={"/articles/4"} >

                </ArticleCard>
                <ArticleCard title={"Semra Karakule , Naci Tüzemen"} description={"Devrekâni damızlık sığır yetiştiriciliği birliğine üye işletmelerde bazı döl verimi özelliklerinin incelenmesi"} doi={"Doi Number :http://dx.doi.org/10.46321/bugu.1167"} link={"/articles/3"}>

                </ArticleCard>

            </div>
        </div>
    )
}

export default Content
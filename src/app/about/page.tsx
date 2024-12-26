import React from 'react'

const page = () => {
    return (
        <div className='tableGeneral'>
            <div>
                <h1 className='tableAbout'>Dergi Hakkında</h1>
                Hayvan Bilimi ve Ürünleri Dergisi, yılda 2 kez yayınlanmaktadır (e-ISSN: 2667-4580). Derginin kısa adı JASP'dır. Dergi kapsam olarak, hayvan bilimi ve üretiminin tüm aşamalarını içerir. Hayvan Bilimi ve Ürünleri Dergisi, açık erişimli uluslararası bir dergidir. Her kullanıcı veya kurum ücretsiz olarak tüm yayınlara ulaşabilir. Yayıncı veya yazardan izin almadan kullanıcılar, makalelerin tam metinlerini okuyabilir, indirebilir, kopyalayabilir, yazdırabilir, bağlantı verebilir ve diğer yasal amaçlarla kullanabilir. Dergimizde, orijinal tam metin araştırma makaleleri, kısa araştırma makaleleri, bilimsel raporlar, vaka raporları, teknik notlar, editöre mektuplar, derlemeler ve gerektiğinde araştırma ve konferans kitapları yayınlanır. Hayvan Bilimi ve Ürünleri Dergisi (JASP), hayvan bilimi ile ürünleri hakkındaki orijinal bilimsel makaleleri ve raporları yayınlayan uluslararası hakemli bir açık erişim dergisidir. JASP dergisi, çiftlik, hobi, yaban (av) ve laboratuvar hayvanların üretilmeleri ile bakım ve beslenmeleri hakkında üretilen her türlü yeni bilimsel bilgiyi kabul etmektedir. Dergimizin, hayvansal üretim, sürdürülebilir hayvancılık, yemler ve hayvan besleme, hayvan genetiği ve ıslahı, hayvan sağlığı, hayvan refahı ve davranışı, hayvan fizyolojisi ve hayvan biyoteknolojisi konularında yayınladığı makalelerle zootekni, veterinerlik, su ürünleri, gıda, tamamlayıcı tıp ve ormancılık gibi tarım, fen ve sağlık bilimleri ile ilgilenen tüm bilim insanlarının, hayvan yetiştiricilerinin ve öğrencilerinin yararlanmasına imkan tanıması beklenmektedir.
            </div>
            <table className='tableBorder'>
                <tbody>
                    <tr className='tableBorder'>
                        <th>Eser Adı:</th>
                        <td className='tableBorder'>Hayvan Bilimi ve Ürünleri Dergisi</td>
                        <th>Dil:</th>
                        <td>Türkçe</td>
                    </tr>
                    <tr className='tableBorder'>
                        <th>Eser Adı (İkinci Dil):</th>
                        <td className='tableBorder'>Journal of Animal Science and Products</td>
                        <th>Editör:</th>
                        <td>Mehmet İhsan Soysal</td>
                    </tr>
                    <tr className='tableBorder'>
                        <th>Eser Adı (Diğer):</th>
                        <td className='tableBorder'></td>
                        <th>Yayıncı:</th>
                        <td>Zootekni Federasyonu (ZF)</td>
                    </tr>
                    <tr className='tableBorder'>
                        <th>ISSN:</th>
                        <td className='tableBorder'></td>
                        <th>Yayın Sıklığı:</th>
                        <td >6 Aylık</td>
                    </tr>
                    <tr className='tableBorder'>
                        <th>eISSN:</th>
                        <td className='tableBorder'>2667-4580</td>
                        <th>Web Sitesi:</th>
                        <td><a href="https://dergipark.org.tr/en/pub/jasp" target="_blank">https://dergipark.org.tr/en/pub/jasp</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default page
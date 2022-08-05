import React from 'react'
import CustomImage from './CustomImage'

export default function HeroSection() {
  const images = [
    "/img/gallery/image 6.svg",
    "/img/gallery/image 4.svg",
    "/img/gallery/image 5.svg",
    "/img/gallery/acaraje.svg",
  ]

  return (
    <div className='section hero'>
      <div className="col typograph">
        <h1 className="title">Você Conhece A Culinária Nordestina?</h1>
        <p className="info">
          A culinária nordestina foi formada através da 
          influência das culinárias portuguesa, indígena e 
          africana. A mistura de sabores e temperos foi sendo, 
          aos poucos, sendo formado durante o período colonial. 
          Os pratos caracterizam-se pela presença marcante de 
          temperos fortes e apimentados.
        </p>
      </div>
      <div className="col gallery">
        { images.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt={"80%"} />
        ))}
      </div>
    </div>
  )
}

import React from 'react'

export default function ChiefSection() {
  return (
    <div className='chief-wrapper'>
      <div className="chief-wrapper-img chief-wrapper-img-reverse">
        <img src="/img/gallery/chef.svg" alt="Chef" />
      </div>

      <div className="chief-wrapper_info">
        <h1 className="chief-section-title">Como tudo começou</h1>

        <div className="chief-content">
          <div className="chief-content-quote">
            <img src="/img/gallery/quote-sign.svg" alt="quote" />
            <p>
              Quando minha mãe tornou-se intolerante ao glúten e à lactose,
              despertei em mim um entusiasmo pela culinária a fim de que 
              pudesse  superar os obstaculos e trazer sabor às suas refeições. 
              Hoje fico feliz em saber que levo sabor para diversas mesas nordestinas! 
              Venha conferir o melhor da culinária nordestina!
            </p>
          </div>
          <div className="chief-sign">
            <p>Kelvyn Lenis Martins</p>
            <p>Chef & Founder</p>
            <img src="/img/gallery/sign.svg" alt="sign" />
          </div>
        </div>
      </div>
    </div>
  )
}

import { useParams } from "react-router-dom";

const data = {
  title: "Cuscuz recheado",
  description: "Cuscuz recheado com carne de sol e queijo!",
  image: "/img/gallery/cuscuz.svg",
  origin: "A origem do cuscuz é atribuída ao Oriente Médio, mais especificamente à cidade de Maghreb, localizada no norte da África. Existem relatos de que o prato já era preparado há pelo menos dois séculos antes de Cristo, mas de uma forma muito diferente da qual conhecemos hoje.",
  ingredients: [
    '60g de Flocão de milho',
    '100g de carne de sol desfiada',
    '40g de queijo coalho'
  ]
}

interface recipeProp {
  title: string;
  description?: string;
  image: string;
  origin?: string;
  ingredients?: string[];
}


export default function Recipe() {
  const { recipe } = useParams();

  console.log(recipe)

  return (
    <div className='recipe-wrapper'>
      {/* <div className="seal">
        <img src="/img/icons/cross-spoon.svg" alt="crossed spoons" />
      </div> */}
      <div className="recipe-image">
        <img src={data.image} alt="recipe image" />
      </div>
      <div className='recipe-info'>
        <div className="origin">
          <h3>Origem</h3>
          <div className="line"></div>
          <details>
            <summary>Saiba mais</summary>
            <p>
              {data.origin}
              {/* A origem do cuscuz é atribuída ao Oriente Médio, 
              mais especificamente à cidade de Maghreb, localizada 
              no norte da África. Existem relatos de que o prato já 
              era preparado há pelo menos dois séculos antes de 
              Cristo, mas de uma forma muito diferente da qual 
              conhecemos hoje. */}
            </p>
          </details>
        </div>
        <div className="ingredients">
          <h3>Ingredientes</h3>
          <div className="line"></div>
          <details>
            <summary>Saiba mais</summary>
            <ul>
              { data.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </details>
          <button>
            <img src="/img/icons/gluten_free.svg" alt="gluten free icon" />
          </button>
          <button>
            <img src="/img/icons/lactose_free.svg" alt="lactose free icon" />
          </button>
        </div>
      </div>
    </div>
  )
}

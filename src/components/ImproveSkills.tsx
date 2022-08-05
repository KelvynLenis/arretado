
export default function ImproveSkills() {
  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src="/img/gallery/Example.svg" alt="several bowls of food" />
      </div>
      <div className="col typography">
        <h1 className="title">Receitas para você experimentar</h1>
        <p className="info">
          Nós preparamos algumas receitas para você experimentar! 
          Com alternativas para dietas com restrições a glúten ou 
          lactose!
        </p>
        <button className="btn">
          <img src="/img/icons/spoon_left.svg" alt="spoon turned to the left" />
          Descubra
          <img src="/img/icons/spoon_right.svg" alt="spoon turned to the right" />
        </button>
        <div className="icons">
          <img src="/img/icons/gluten_free.svg" alt="gluten free icon" />
          <img src="/img/icons/lactose_free.svg" alt="lactose free icon" />
        </div>
      </div>
    </div>
  )
}

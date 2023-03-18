

const Cards = (props) => {
    
const createCard = (card) =>{
    return (
      <div className="card">
        <div className="logo">
          <div className="image">
            <img src={card.logo} alt="logo" />
          </div>
          <div className="details">
            <div className="details-row-1">
              {card.company} {card.new} {card.feature}
            </div>
            <div className="details-row-2">{card.position}</div>
            <div className="details-row-3">
              {card.postedAt} {card.contract} {card.location}
            </div>
          </div>
        </div>
        <div className="languages">
          {card.role} {card.level} {card.languages}
        </div>
      </div>
    );
}

    return(
    <div className="container">
     {props.jobs.map((el)=> createCard(el))}
    </div>
)
};

export default Cards;
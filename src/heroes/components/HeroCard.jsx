import { Link } from "react-router-dom"

const none = {
  id: 'none',
  superhero: 'none',
  alter_ego: 'none',
  first_appearance: 'none',
  characters:'none',
}

export const HeroCard = ({hero=none}) => {
  const {
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
  } = hero
  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4">
              <img className="card-img"
                src={`/assets/${id}.jpg`}
                alt={`No load img: ${id}`}
              />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h4 className="card-title">{superhero}</h4>
                <p className="card-text">{alter_ego}</p>
                {
                  ( alter_ego!==characters) && (<p>{characters}</p>)
                }
                <p className="card-text">
                  <small className="text-muted">{ first_appearance}</small>
                </p>

                <Link to={`/hero/${id}`}>
                  Más...
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

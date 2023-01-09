import { Navigate, useNavigate, useParams } from "react-router-dom";
import { HeroCard } from "../components/HeroCard";
import { getHeroById } from '../helpers'

export const HeroPage = () => {

  const { id } = useParams()

  const hero = getHeroById( id )

  const navigate = useNavigate()

  const onBack = () => {
    navigate(-1)
  }

  if(!hero) return <Navigate to="/marvel" />

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={ `/assets/${ id }.jpg` }
          alt={ hero.superhero }
          className="w-75 img-thumbnail animate__animated animate__fadeInLeft"
        >
        </img>
      </div>
      <div className="col-8">
        <h1>{ hero.superhero }</h1>
        <ul>
          <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li><hr />
          <li className="list-group-item"><b>Publisher: </b>{hero.owner}</li><hr />
          <li className="list-group-item"><b>First appearance: </b>{hero.first_appearance}</li><hr />
        </ul>
        <h5 className="mt-3">Characters:</h5>
        <p>{ hero.characters }</p>
        <button
          className="btn btn-outline-info"
          onClick={ onBack }
        >
          Back
        </button>
      </div>
    </div>
  )
}

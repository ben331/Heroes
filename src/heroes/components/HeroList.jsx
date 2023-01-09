import { getHeroesByOwner } from "../helpers/getHeroesByOwner"
import { HeroCard } from "./HeroCard"

export const HeroList = ({owner}) => {

    const heroes = getHeroesByOwner(owner)

  return (
    <div className="m-3 row row-cols-1 row-cols-md-3 g-3">
        {
            heroes.map((hero)=>{
                return <HeroCard key={hero.id} hero={hero} />
            })
        }
    </div>
  )
}

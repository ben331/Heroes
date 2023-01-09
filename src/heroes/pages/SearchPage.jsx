import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string"
import { useForm } from "../../hooks/useForm"
import { getHeroesByName } from "../helpers/getHeroesByName"
import { HeroCard } from "../components/HeroCard"
import { AlertSearch } from "../components/AlertSearch"

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q=''} = queryString.parse( location.search )

  const heroes = getHeroesByName(q)

  const {formState:{searchHero}, onInputChange, onResetForm } = useForm({
    searchHero: q
  })

  const onSubmit = (event) => {
    event.preventDefault()

    navigate(`?q=${searchHero}`)
  }

  const displayInfo = (q === '') ? 'display: block' : 'display: none'
  const displayAlert =  (q!='' && heroes.length==0) ? 'display: block' : 'display: none'

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSubmit }>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchHero"
              autoComplete="off"
              value={searchHero}
              onChange={onInputChange}
            >
            </input>
            <button
              type='submit'
              className="btn btn-outline-info mt-1"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <AlertSearch q={q} length={heroes.length}/>
          {
            heroes.map( hero => (
              <HeroCard key={hero.id} hero={hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}

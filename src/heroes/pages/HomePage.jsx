import { HeroList } from "../components/HeroList"

export const HomePage = ({owner}) => {
  return (
    <>
      <h1 className="m-3">{owner}</h1>
      <hr />

      <HeroList owner={owner}/>
    </>
  )
}

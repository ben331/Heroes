import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { HomePage } from "../pages"
import { HeroPage } from "../pages/HeroPage"
import { SearchPage } from "../pages/SearchPage"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="containter">
          <Routes>
            <Route path="marvel" element={ <HomePage owner='Marvel Comics'/> } />
            <Route path="dc" element={ <HomePage owner='DC Comics'/> } />

            <Route path="search" element={ <SearchPage /> } />
            <Route path="hero/:id" element={ <HeroPage /> } />

            <Route path="/" element={<Navigate to="marvel"/>} />
          </Routes>
        </div>
    </>
  )
}

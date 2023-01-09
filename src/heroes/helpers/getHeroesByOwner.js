import {heroes} from '../data/heroes'

export const getHeroesByOwner = ( owner ) => {
    const validOwners = ['DC Comics', 'Marvel Comics']

    if( !validOwners.includes(owner)){
        throw new Error(`${owner} is not a valid owner`)
    }

    return heroes.filter(heroe => heroe.owner === owner)
}
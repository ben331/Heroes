export const AlertSearch = ({q, length}) => {
    if(length!=0) return false

    return (
        (q === '')
            ? <div className="alert alert-primary" >Search a hero</div>
            : <div className="alert alert-danger" >No hero with: <b>{ q }</b></div>

    )
}
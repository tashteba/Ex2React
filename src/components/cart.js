
function Carte () {
    const monstera = 8
    const lierre = 10
    const fleurs = 15

    return (<div><h1>Panier</h1>
    <ul>
        <li>monstera {monstera}</li>
        <li>lierre {lierre}</li>
        <li>fleurs {fleurs}</li>

    </ul> <h2>total = {monstera + lierre + fleurs}</h2></div>
    
    )
}

export default Carte




function CardProdotto({ prodotto }) {

    const { title, price, description, category, image, rating } = prodotto;

    return (
        <div className="prodotto">
            <div className="immagine-prodotto">
                <img src={image} alt={title} className="card-img-top"
                    style={{ height: "200px", objectFit: "contain" }} />
            </div>
            <div className="info-prodotto">
                <p className="categoria-prodotto pt-4">{category}</p>
                <h3 className="nome-prodotto">{title}</h3>
                <div className="rating-container">
                    <span className="punteggio-prodotto">{rating.rate} punteggio - </span>
                    <span className="recensioni-prodotto">{rating.count} recensioni</span>
                </div>
                <p className="descrizione-prodotto">{description}</p>
                <div className="footer-part">
                    <p className="prezzo-prodotto">€{price}</p>
                    <button className="btn-aggiungi">Aggiungi al carrello</button>
                </div>
            </div>
        </div>
    )
}

export default CardProdotto
function Clothes({itemsForSale}) {
    return(
        <div className="products">
            {itemsForSale.map((item => {
                const {id, name, price, image} = item;
                return(
                    <div key={id} className="product-card">
                        <img src={image} alt="garment" className="item-photo" />
                    <div>
                        <h4>$ {price}</h4>
                        <p className="item-name">{name}</p>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default Clothes;
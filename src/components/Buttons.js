function Buttons({filteredClothes, setClothes, dataCollection}) {
    return(
        <div className="options-box">
            <button className="change" onClick={() => setClothes(dataCollection)}>Show All</button>
            <button className="change" onClick={() => filteredClothes("dress")}>Dresses</button>
            <button className="change" onClick={() => filteredClothes("blouse")}>Blouses</button>
            <button className="change" onClick={() => filteredClothes("sweater")}>Sweaters</button>
            <button className="change" onClick={() => filteredClothes("pants")}>Pants</button>
            <button className="change" onClick={() => filteredClothes("coat")}>Coats</button>
        </div>
    )
}

export default Buttons;
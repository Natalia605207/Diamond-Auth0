import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Clothes from "./Clothes";
import Buttons from "./Buttons";
import { dataCollection } from "../data/dataCollection";

const Secret = () => {
    const {isAuthenticated} = useAuth0();
    const [clothes, setClothes] = useState(dataCollection);

    const chosenClothes = (searchTerm) => {
        const newClothes = dataCollection.filter(item => item.searchTerm === searchTerm);
        setClothes(newClothes);
    }

    return(
    isAuthenticated && (
        <div>
        <h1>Spring/Summer 2025</h1>
        <Buttons filteredClothes={chosenClothes} setClothes={setClothes} dataCollection={dataCollection} /> 
        <Clothes itemsForSale={clothes} />
        </div>
    ))
}

export default Secret;
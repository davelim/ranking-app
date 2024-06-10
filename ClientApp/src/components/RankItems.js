import React, {useState, useEffect} from 'react';
import MovieImageArr from "./MovieImages.js"


const RankItems = () => {
    const [items, setItems] = useState([]);
    const dataType = 1; // 1: movies, 2: albums

    useEffect(() => {
        fetch(`item/${dataType}`)
        .then((results) => {
            return results.json();
        })
        .then(data => {
            setItems(data);
        })
    },[]); // fetch data and populate "items" array

    const itemsJSX =
        (items.length > 0)
        ? items.map(item => {
            return (
              <div className="unranked-cell">
                {/* <h3>{item.title}, {item.id}, {item.imageId}</h3> */}
                <img id={`item-${item.id}`} src={MovieImageArr.find(img => img.id === item.imageId)?.image} />
              </div>)})
        : <div>Loading...</div>;

    return(
        <main>
            <div className = "items-not-ranked">
                {itemsJSX}
            </div>
        </main>
    );
}
export default RankItems;
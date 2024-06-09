import React, {useState, useEffect} from 'react';


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
        items != null
        ? items.map(item => <h3>{item.title}</h3>)
        : <div>Loading...</div>;

    return(
        <main>{itemsJSX}</main>
    );
}
export default RankItems;

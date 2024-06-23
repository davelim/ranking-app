import React, {useState, useEffect} from 'react';
import MovieImageArr from "./MovieImages.js";
import RankingGrid from "./RankingGrid.js";
import ItemCollection from "./ItemCollection.js";
import Item from './Item.js';

const RankItems = () => {
    const [items, setItems] = useState([]);
    const dataType = 1; // 1: movies, 2: albums

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drop(ev) {
        ev.preventDefault();
        const targetElm = ev.target;
        if (targetElm.nodeName === "IMG") {
            return false;
        }
        if (targetElm.childNodes.length === 0) {
            var data = parseInt(ev.dataTransfer.getData("text").substring(5));
            const transformedCollection =
                items.map((item) =>
                    (item.id === parseInt(data))
                    ? {...item, ranking: parseInt(targetElm.id.substring(5))}
                    : {...item, ranking: item.ranking});
            setItems(transformedCollection);
        }
    }

    useEffect(() => {
        fetch(`item/${dataType}`)
        .then((results) => {
            return results.json();
        })
        .then(data => {
            setItems(data);
        })
    },[]); // fetch data and populate "items" array

    // const itemsJSX =
    //     (items.length > 0)
    //     ? items.map(item => {
    //         return (
    //             (item.ranking === 0)
    //                 ? <div className="unranked-cell">
    //                 {/* <h3>{item.title}, {item.id}, {item.imageId}</h3> */}
    //                 <img id={`item-${item.id}`} src={itemImgObj} style={{cursor:"pointer"}}
    //                     draggable="true" onDragStart={drag}
    //                 />
    //             </div>
    //                 : null
    //             )})
    //     : <div>Loading...</div>;

    return(
        <main>
            <RankingGrid items={items} imgArr={MovieImageArr}
                drag={drag} allowDrop={allowDrop} drop={drop}/>
            <ItemCollection items={items} drag={drag} imgArr={MovieImageArr} />
        </main>
    );
}
export default RankItems;
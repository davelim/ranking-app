const Item = ({item, drag, itemImgObj}) => {
    return (
        <div className="unranked-cell">
            {/* <h3>{item.title}, {item.id}, {item.imageId}</h3> */}
            <img id={`item-${item.id}`} src={itemImgObj.image}
                style={{cursor:"pointer"}} draggable="true" onDragStart={drag}
            />
        </div>
    )
}
export default Item;
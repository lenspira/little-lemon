const Dish = (props) => {
    const { id, imgSrc, imgAlt, name, price, description } = props;
    return (
        <div id={`dish_${id}`} className='dish-item'>
            <img className='dish-img' src={imgSrc} alt={imgAlt} />
            <div className='dish-text-master'>
                <div className='dish-text-container'>
                    <div className='flex-row dish-title-container'>
                        <h3>{name}</h3>
                        <span>{`$${price}`}</span>
                    </div>
                    <p>{description}</p>
                </div>
                <div className='dish-delivery-container'>
                    <a href='#'>Order a delivery <i className="fa fa-truck"></i></a>
                </div>
            </div>
        </div>
    )
};

export default Dish;
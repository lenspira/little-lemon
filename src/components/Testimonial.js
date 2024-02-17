const Testimonial = (props) => {
    const { id, imgSrc, imgAlt, rating, review, name } = props;
    const renderRating = (rating) => {
        const roundedNumber = Math.floor(rating);
        const starArray = [];
        for (let i = 1; i <= roundedNumber; i++) {
            starArray.push(<i className="fa fa-star"></i>)
            if (i === roundedNumber && roundedNumber < rating) {
                starArray.push(<i className="fa fa-star-half"></i>)
            }
        }
        return starArray;
    }
    return (
        <div id={`testimonial_${id}`} className='testimonial'>
            <img className="customer-avatar" src={imgSrc} alt={imgAlt} />
            <div className='testimonial-text-container'>
                <div className="customer-rating">{renderRating(rating)}</div>
                <p>{`"${review}"`}</p>
                <span>{name}</span>
            </div>
        </div>
    )
};

export default Testimonial;
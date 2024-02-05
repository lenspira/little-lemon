const Testimonial = (props) => {
    const { id, imgSrc, imgAlt, rating, review, name } = props;
    return (
        <div id={`testimonial_${id}`} className='testimonial'>
            <img className="customer-avatar" src={imgSrc} alt={imgAlt} />
            <div className='testimonial-text-container'>
                <p>{`"${review}"`}</p>
                <span>{name}</span>
            </div>
        </div>
    )
};

export default Testimonial;
const CTAButton = (props) => {
    const { id, title, onClick } = props;
    return (
        <button
            id={id}
            type="button"
            className="btn btn-primary"
            onClick={onClick}
        >
            {title}
        </button>
    )
};

export default CTAButton;
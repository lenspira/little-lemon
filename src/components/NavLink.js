import { Link, useLocation } from 'react-router-dom';

const NavLink = (props) => {
    const location = useLocation();
    const isActive = location.pathname === props.to;
    const className = isActive ? 'active' : '';
    return (
        <Link className={className} {...props}>{props.children}</Link>
    );
};

export default NavLink;
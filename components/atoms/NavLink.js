import Link from "next/link";
import PropTypes from "prop-types";

const NavLink = ({ title, active, href = "/" }) => {
  const classNavLink = active ? "nav-link active" : "nav-link";
  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classNavLink} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
};

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  href: PropTypes.string,
};

export default NavLink;

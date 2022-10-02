import Link from "next/link";
import PropTypes from "prop-types";

const NavItem = ({ active, title, href = "/" }) => {
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

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  href: PropTypes.string,
};

export default NavItem;

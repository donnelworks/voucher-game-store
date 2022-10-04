import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";

const FooterLink = ({ title, links = [] }) => {
  return (
    <>
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        {links.map((link) => (
          <li className="mb-6">
            <Link href={link.href}>
              <a className="text-lg color-palette-1 text-decoration-none">
                {link.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

FooterLink.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FooterLink;

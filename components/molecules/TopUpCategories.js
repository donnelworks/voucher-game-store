import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";

const TopUpCategories = ({ icon, children, total }) => {
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image src={icon} width={60} height={60} />
          <p className="color-palette-1 mb-0 ms-12">{children}</p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">{total}</p>
        </div>
      </div>
    </div>
  );
};

TopUpCategories.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.node,
  total: PropTypes.number.isRequired,
};

export default TopUpCategories;

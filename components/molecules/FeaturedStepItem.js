import React from "react";
import PropTypes from "prop-types";

const FeaturedStepItem = ({ icon, title, desc1, desc2 }) => {
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <img src={icon} className="mb-30" width={80} height={80} alt="" />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {desc1}
          <br />
          {desc2}
        </p>
      </div>
    </div>
  );
};

FeaturedStepItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc1: PropTypes.string.isRequired,
  desc2: PropTypes.string,
};

export default FeaturedStepItem;
